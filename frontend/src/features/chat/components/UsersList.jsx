import { useState } from "react";
import { toast } from "react-toastify";
import { useFetchAllUsers } from "../constants/useFetchAllUsers";
import { useAddUserToProject } from "../constants/useAddUserToProject";
import PropTypes from "prop-types";
import { X } from "lucide-react";
const UserList = ({ onClose, projectId }) => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const { users, isLoading, isError } = useFetchAllUsers(projectId);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const { addUserToProject, isLoading: isAdding } = useAddUserToProject();

  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
  };

  const handleAddUser = async () => {
    if (!selectedUserId) return;
    try {
      await addUserToProject({ projectId, newUserId: selectedUserId });
      toast.success("User added successfully!");
      onClose();
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error("Failed to add user.");
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center p-6">
        <div className="loader"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-full w-full items-center justify-center p-6 text-red-500">
        Failed to fetch users.
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full flex-col rounded-r-lg border border-border bg-white text-black shadow-lg md:max-w-md">
      <div className="flex items-center justify-between rounded-tr-lg bg-secondary px-5 py-4 text-white">
        <h2 className="text-lg font-semibold">All Users</h2>
        <button onClick={onClose} className="transition hover:text-primary">
          <X className="h-5 w-5" />
        </button>
      </div>
      {/* Search */}
      <div className="border-b border-border bg-background px-5 py-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search user by email..."
          className="w-full rounded-lg border border-muted p-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="flex-1 space-y-3 overflow-auto bg-background px-5 py-3">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="loader" />
          </div>
        ) : filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user._id}
              className={`flex cursor-pointer items-center justify-between rounded-lg border p-3 transition-all duration-200 ${
                selectedUserId === user._id
                  ? "bg-primary/10 border-primary"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleUserClick(user._id)}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-semibold uppercase text-white">
                  {user.email?.[0] || "U"}
                </div>
                <div className="text-sm">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <button className="text-muted-foreground transition hover:text-red-500">
                <X className="h-4 w-4" />
              </button>
            </div>
          ))
        ) : (
          <div className="text-center text-sm text-muted-foreground">
            No users found.
          </div>
        )}
      </div>

      <div className="rounded-br-lg border-t border-border bg-background p-5">
        <button
          onClick={handleAddUser}
          disabled={!selectedUserId || isAdding}
          className={`className="hover:bg-primary/90 w-full rounded-lg bg-primary py-3 font-medium text-white transition-all duration-200 ${
            !selectedUserId || isAdding
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-primary/90"
          }`}
        >
          {isAdding ? "Adding..." : "Add User"}
        </button>
      </div>
    </div>
  );
};
UserList.propTypes = {
  onClose: PropTypes.func.isRequired,
  projectId: PropTypes.string.isRequired,
};

export default UserList;
