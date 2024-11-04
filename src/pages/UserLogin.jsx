import { useState } from "react";
import Login from "../components/Registration/Login";
import Registration from "../components/Registration/Registration";
import SocialLogin from "../components/Registration/SocialLogin";
export default function UserLogin() {
  const [login, setLogin] = useState(true);

  return (
    <section className="pt-[124px] container  flex justify-center">
      <div className="max-w-[483px] min-h-[607px] w-full mt-12 mb-[35px]">
        <div className="text-center flex justify-center gap-5 *:w-[140px] *:h-[31px]   uppercase text-cardTitle font-medium text-[20px] leading-[140%] mb-10 *:transition-all *:duration-100">
          <button
            className={` border-b-[1.5px] hover:text-accent1 hover:border-accent1 ${
              login && "border-accent1 text-accent1"
            }`}
            onClick={() => setLogin(true)}
          >
            Login
          </button>
          <button
            className={` border-b-[1.5px] hover:text-accent1 hover:border-accent1  ${
              !login && "border-accent1 text-accent1"
            }`}
            onClick={() => setLogin(false)}
          >
            Register
          </button>
        </div>

        {login ? <Login onLogin={setLogin}/> : <Registration />}

        <SocialLogin />
      </div>
    </section>
  );
}
