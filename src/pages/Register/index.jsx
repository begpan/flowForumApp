import { Link } from "react-router-dom";
import InputField from "../../components/InputField";
import { upload } from "../../helpers";
import { v4 } from "uuid";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Register = () => {
  // context yapısına sağlana  verilere abone olma

  const { signup } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // inputlara girilen bverlierden obje olustur
    const form = new FormData(e.target);
    // form verisini objeye cevirme
    const formData = Object.fromEntries(form.entries());

    // resmin url al
    const url = await upload(formData.image);

    if (url) {
      const newUser = { ...formData, id: v4(), image: url };
      // kullanıcıyı veritanabına kaydet
      await signup(newUser);
    }
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
              Sign up
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* input alanı
               */}
              <InputField
                label={"Name"}
                holder={"beg etc."}
                type={"text"}
                name={"name"}
              />
              <InputField
                label={"Email"}
                holder={"name@company.com etc."}
                type={"email"}
                name={"email"}
              />
              <InputField
                label={"Password"}
                holder={"•••••••••"}
                type={"password"}
                name={"password"}
              />

              <InputField
                label={"Profile picture"}
                type={"file"}
                name={"image"}
              />

              <div className="flex items-center justify-between"></div>
              <button
                type="submit"
                className="bg-blue-500 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-600 dark:focus:ring-primary-800"
              >
                Register
              </button>
              <p className=" text-sm font-light text-gray-500 dark:text-gray-400">
                Do you have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
