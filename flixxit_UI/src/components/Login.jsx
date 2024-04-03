import { useState } from "react";
import coverImg from "../assets/images/cover_image.png";

function Login() {
  const [isUser, setIsUser] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userHandler = () => {
    setIsUser(!isUser);
  };
  const nameHandler = (e) => {
    setFullName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const getInputData = (e) => {
    e.preventDefault();
    console.log(fullName, email, password);
    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="absolute">
        <img
          className="w-full h-full object-cover"
          src={coverImg}
          alt="cover"
        />
      </div>
      <form
        onSubmit={getInputData}
        action=""
        className="p-10 m-2 flex flex-col items-center justify-center absolute w-3/4 md:w-3/12 my-36 mx-auto left-0 right-0 bg-black rounded-md opacity-90">
        <h1 className="text-white text-3xl mb-5 font-bold">
          {isUser ? "Login" : "Signup"}
        </h1>
        <div className="flex flex-col w-full md:w-60">
          {!isUser && (
            <input
              value={fullName}
              onChange={nameHandler}
              className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
              type="text"
              placeholder="Enter Fullname"
            />
          )}

          <input
            value={email}
            onChange={emailHandler}
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
            type="text"
            placeholder="Enter E-mail"
          />
          <input
            value={password}
            onChange={passwordHandler}
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
            type="password"
            placeholder="Enter Password"
          />
          <button className="p-2 mt-2 mb-2 bg-red-800 text-white font-bold rounded-md">
            {isUser ? "Login" : "Signup"}
          </button>
          <p className="text-white">
            {isUser ? "New to Flixxit?" : "Already have an account?"}
            <span
              onClick={userHandler}
              className="text-blue-600 mx-1 font-medium cursor-pointer">
              {isUser ? "Signup" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </>
  );
}

export default Login;
