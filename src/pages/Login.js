import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
export const Login = () => {
  const [UserName, setuserName] = useState("");
  const [Password, setPassword] = useState("");
  const history = useHistory();
  function handleLogin(e) {
    e.preventDefault();
    axios
      .get(
        `https://www.smsgateway.center/library/api/self/ViewProfile/?userId=${UserName}&password=${Password}&format=json`
      )
      .then((data) => {
        if ("success" === data.data.status) {
          console.log(data.data);
          localStorage.setItem(
            "user",
            JSON.stringify({ UserName: UserName, Password: Password })
          );
          history.push("/home");
        }
      })
      .catch((e) => console.log(e));
  }

  return (
    <>
      <div className="flex justify-center h-screen items-center bg-gray-100">
        <div className="w-full max-w-xl">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border hover:border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                value={UserName}
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setuserName(e.target.value);
                }}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border hover:border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="******************"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleLogin}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
