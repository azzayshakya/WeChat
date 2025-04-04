import Navbar from "@/components/Navbar";
import CreateAccountForm from "./components/CreateAccountForm";

export default function CreateAccountMain() {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
        <CreateAccountForm />
      </div>
    </div>
  );
}
