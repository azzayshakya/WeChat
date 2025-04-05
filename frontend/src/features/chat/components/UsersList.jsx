import { useState } from "react";
import { X } from "lucide-react";
import { useFetchAllUsers } from "../constants/useFetchAllUsers";
import PropTypes from "prop-types";

const UserList = ({ onClose }) => {
  const { users, isLoading } = useFetchAllUsers();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="flex h-screen w-full flex-col rounded-r-lg border border-border bg-white text-black shadow-lg md:max-w-md">
      {/* Header */}
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

      {/* Users */}
      <div className="flex-1 space-y-3 overflow-auto bg-background px-5 py-3">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="loader" />
          </div>
        ) : filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user._id}
              className="flex items-center justify-between rounded-lg bg-muted p-3 transition hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-semibold uppercase text-white">
                  {user.email?.[0] || "U"}
                </div>
                <div className="text-sm">{user.email}</div>
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

      {/* Add User */}
      <div className="rounded-br-lg border-t border-border bg-background p-5">
        <button className="hover:bg-primary/90 w-full rounded-lg bg-primary py-3 font-medium text-white transition-all duration-200">
          Add User
        </button>
      </div>
    </div>
  );
};
UserList.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default UserList;
