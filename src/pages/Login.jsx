import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoding, setIsLoding] = useState(false);
  const [isPassword, setIsPassword] = useState(true);

  const login = async (e) => {
    e.preventDefault();
    setIsLoding(true);

    console.log("email", email);
    console.log("password", password);

    try {
      const res = await fetch("", {
        method: "",
        headers: {},
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      console.log(data);
      setEmail("");
      setPassword("");
      setIsLoding(false);

      console.log("Form Submitted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen">
      <form
        className="flex flex-col gap-5 max-w-sm w-[90%] border p-5"
        onSubmit={login}
      >
        <h1 className="text-5xl font-semibold">Login</h1>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="border px-4 py-1.5"
            required
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">password</label>
          <div className="relative">
            <input
              type={isPassword ? "password" : "text"}
              placeholder="Enter password"
              className="border px-4 py-1.5 w-full"
              required
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              type="button"
              className="absolute right-2 top-[50%] translate-y-[50%]"
              onClick={() => {
                setIsPassword(!isPassword);
              }}
            >
              show hide
            </button>
          </div>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            disabled={isLoding ? true : false}
            className="px-4 py-1.5 bg-neutral-800 text-neutral-50"
          >
            {isLoding ? "Loding" : "Login"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
