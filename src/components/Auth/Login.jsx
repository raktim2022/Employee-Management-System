import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = ({ handleLogin}) => {
  const [check, setcheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const onSumbitHandler = (e) => {
    e.preventDefault();
    const target = e.target;
    if (
      target.email.value.split("").length > 3 &&
      target.password.value.split("").length > 10
    ) {
      setemail((prev) => {
        return target.email.value;
      });
      setpassword((prev) => {
        return target.password.value;
      });
    }

    handleLogin(email, password);
    setemail("");
    setpassword("");
  };

  return (
    <div className="flex select-none h-screen w-screen items-center justify-center">
      <div className="border-[.5px] rounded-md h-[70%] w-1/4 p-3 hover:border-blue-300 border-zinc-700">
        <h1 className="text-6xl tracking-tighter w-full text-center p-5">
          Login
        </h1>
        <form
          onSubmit={onSumbitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            name="email"
            className="bg-zinc-800 w-[90%] outline-none focus:bg-zinc-700 hover:bg-zinc-700 p-3 m-2 rounded-md text-lg"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Email"
          />
          <div className="w-full ml-4 h-fit relative">
            <input
              minLength={10}
              name="password"
              className="bg-zinc-800 w-[90%] outline-none hover:bg-zinc-700 p-3 m-2 rounded-md text-lg"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Password"
            />

            {showPassword ? (
              <FaRegEyeSlash
                onClick={() => setShowPassword(!showPassword)}
                className="absolute cursor-pointer hover:text-indigo-400 text-lg top-1/3 right-10"
              />
            ) : (
              <FaRegEye
                onClick={() => setShowPassword(!showPassword)}
                className="absolute cursor-pointer hover:text-indigo-400 text-lg top-1/3 right-10"
              />
            )}
          </div>
          <div className="flex items-center w-full px-3 justify-between">
            <div>
              <input
                onClick={() => setcheck((prev) => !prev)}
                required
                className="mx-3"
                id="chekbox"
                type="checkbox"
              />
              <label
                className={`text-lg cursor-pointer ${
                  check ? "text-green-400" : "text-blue-400"
                } capitalize tracking-tighter`}
                htmlFor="chekbox"
              >
                Remember me
              </label>
            </div>
            <h3 className="text-lg cursor-pointer hover:text-red-600 text-red-400 capitalize tracking-tighter">
              Forget Password
            </h3>
          </div>
          <input
            className="w-[70%] hover:bg-blue-800 cursor-pointer bg-blue-600 p-3 text-xl mt-12 rounded-lg"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
