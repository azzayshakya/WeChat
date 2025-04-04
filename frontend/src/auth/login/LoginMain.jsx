import Navbar from "@/components/Navbar";
import LoginForm from "./components/LoginForm";

export default function LoginMain() {
  return (
    <div className="">
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
        <LoginForm />
      </div>
    </div>
  );
}
