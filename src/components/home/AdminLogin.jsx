import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

export const AdminLogin = () => {
  //   This code handles the Login authentication
  const handleLogin = async (e) => {
    const LogIn = document.querySelector(".LogInForm");
    const email = LogIn.email.value;
    const password = LogIn.password.value;
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      LogIn.reset();
      window.location.href = "/admin";
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="LoginPage-Wrapper w-full h-full py-12 flex flex-col justify-center items-center bg-white border-t-2 border-zinc-200">
      <div className=" w-5/6 h-fit flex flex-col gap-10 ">
        <div className="header text-2xl text-tet">Admin Login</div>
        <form
          className="LogInForm flex flex-col gap-5 justify-start my-0 mx-auto w-full"
          onSubmit={handleLogin}
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            className=" outline-none py-3 text-tet px-5 border-b border-slate-300 bg-inherit"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className=" outline-none py-3 text-tet px-5 border-b border-slate-300 bg-white"
          />
          <button
            type="submit"
            className="Login-Btn button bg-secondary text-tet py-4 font-medium px-12 mb-24 cursor-pointer w-fit text-nowrap mt-5"
          >
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
};
