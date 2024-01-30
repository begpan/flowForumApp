import { Link } from "react-router-dom";
import InputField from "../../components/InputField";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Login = () => {
  // hesaba giriş yapma methodu
  const { login } = useContext(UserContext);
  // form gonderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // formdaki verileri al
    const form = new FormData(e.target);
    const user = Object.fromEntries(form.entries());

    // giriş yapma methodunu calıstır
    login(user);
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className=" h-screen flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flow
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="flex items-center justify-between"></div>
              <InputField
                label={"Name"}
                holder={"beg etc."}
                type={"text"}
                name={"name"}
              />

              <InputField
                label={"Password"}
                holder={"•••••••••"}
                type={"password"}
                name={"password"}
              />
              <button
                type="submit"
                className="bg-blue-500 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-600 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
