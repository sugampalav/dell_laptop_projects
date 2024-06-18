import React from "react";
import Button from "./Button";
import Link from "next/link";

const Login = () => {
  return (
    <div className="h-[614px] w-[576px] rounded-[20px] border-2 border-[#C1C1C1] px-[60px] py-10  ">
      <p className="mb-9 text-center text-[32px] font-semibold leading-[38.73px]">
        Login
      </p>
      <p className="mb-[13px] text-center text-[24px] font-medium">
        Welcome back to ECOMMERCE
      </p>
      <p className="mb-[31px] text-center text-[14px] font-normal">
        The next gen business marketplace
      </p>

      <div className="mt-8">
        <label className="block">
          <span className="text-black-700 block text-sm font-normal">
            Email
          </span>
          <input
            type="email"
            placeholder="Enter"
            className="mt-2 h-[46px] w-full rounded-md border-[1px] border-[#C1C1C1] px-4 shadow-sm focus:border-gray-500"
          />
        </label>
      </div>

      <div className="mt-8">
        <label className="block">
          <span className="text-black-700 block text-sm font-normal">
            Password
          </span>
          <input
            type="password"
            placeholder="Enter"
            className="mt-2 h-[46px] w-full rounded-md border-[1px] border-[#C1C1C1] px-4 shadow-sm focus:border-gray-500"
          />
        </label>
      </div>

      <Button label="Login" style="mb-[29px]" />

      <hr className="mb-[31px] bg-[#C1C1C1]" />

      <div className="text-center text-[16px] font-normal">
        Don&apos;t have an account?
        <Link
          href="/"
          className="ml-[11px] font-medium uppercase hover:border-b-2 hover:border-black"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

const Verify = () => {
  return (
    <div className="h-[453px] w-[576px] rounded-[20px] border-2 border-[#C1C1C1] px-[60px] pb-[60px] pt-10 ">
      <p className="mb-8 text-center text-[32px] font-semibold leading-[38.73px]">
        Verify your email
      </p>
      <p className="mx-auto mb-[46px] w-[334px] text-center  text-[16px] font-normal">
        Enter the 8 digit code you have received on <br />
        anu***@gmail.com
      </p>

      <div className="mb-6">
        <span className="mb-[7px] block text-[16px] font-normal text-black">
          Code
        </span>
        <form id="otp-form">
          <div className="flex items-center justify-center gap-3">
            <input
              type="text"
              className=" h-12 w-[46px] appearance-none rounded border  border-[#c1c1c1] border-transparent bg-white p-4 text-center text-2xl  font-medium caret-black outline-none focus:ring-2 focus:ring-black"
              pattern="\d*"
              maxLength={1}
            />
            <input
              type="text"
              className="h-12 w-[46px] appearance-none rounded border  border-[#c1c1c1] border-transparent bg-white p-4 text-center text-2xl  font-medium caret-black outline-none focus:ring-2 focus:ring-black"
              maxLength={1}
            />
            <input
              type="text"
              className="h-12 w-[46px] appearance-none rounded border  border-[#c1c1c1] border-transparent bg-white p-4 text-center text-2xl  font-medium caret-black outline-none focus:ring-2 focus:ring-black"
              maxLength={1}
            />
            <input
              type="text"
              className="h-12 w-[46px] appearance-none rounded border  border-[#c1c1c1] border-transparent bg-white p-4 text-center text-2xl  font-medium caret-black outline-none focus:ring-2 focus:ring-black"
              maxLength={1}
            />
            <input
              type="text"
              className="h-12 w-[46px] appearance-none rounded border  border-[#c1c1c1] border-transparent bg-white p-4 text-center text-2xl  font-medium caret-black outline-none focus:ring-2 focus:ring-black"
              maxLength={1}
            />
            <input
              type="text"
              className="h-12 w-[46px] appearance-none rounded border  border-[#c1c1c1] border-transparent bg-white p-4 text-center text-2xl  font-medium caret-black outline-none focus:ring-2 focus:ring-black"
              maxLength={1}
            />
            <input
              type="text"
              className="h-12 w-[46px] appearance-none rounded border  border-[#c1c1c1] border-transparent bg-white p-4 text-center text-2xl  font-medium caret-black outline-none focus:ring-2 focus:ring-black"
              maxLength={1}
            />
            <input
              type="text"
              className="h-12 w-[46px] appearance-none rounded border  border-[#c1c1c1] border-transparent bg-white p-4 text-center text-2xl  font-medium caret-black outline-none focus:ring-2 focus:ring-black"
              maxLength={1}
            />
          </div>
          <div className="mx-auto mt-4 ">
            <Button label="Verify" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

const Signup = () => {
  return (
    <>
      <div className="h-[691px] w-[576px] rounded-[20px] border-2 border-[#C1C1C1] px-[60px] py-10  ">
        <p className="text-center text-[32px] font-semibold leading-[38.73px]">
          Create your account
        </p>
        <form>
          <div className="mt-8">
            <label className="block">
              <span className="text-black-700 block text-sm font-normal">
                Name
              </span>
              <input
                type="text"
                placeholder="Enter"
                className="mt-2 h-[46px] w-full rounded-md border-[1px] border-[#C1C1C1] px-4 shadow-sm focus:border-gray-500"
              />
            </label>
          </div>

          <div className="mt-8">
            <label className="block">
              <span className="text-black-700 block text-sm font-normal">
                Email
              </span>
              <input
                type="email"
                placeholder="Enter"
                className="mt-2 h-[46px] w-full rounded-md border-[1px] border-[#C1C1C1] px-4 shadow-sm focus:border-gray-500"
              />
            </label>
          </div>

          <div className="mt-8">
            <label className="block">
              <span className="text-black-700 block text-sm font-normal">
                Password
              </span>
              <input
                type="password"
                placeholder="Enter"
                className="mt-2 h-[46px] w-full rounded-md border-[1px] border-[#C1C1C1] px-4 shadow-sm focus:border-gray-500"
              />
            </label>
          </div>

          <Button label="Create account" />

          <div className="text-center text-[16px] font-normal">
            Have an account?
            <Link
              href="/"
              className="ml-[11px] font-medium uppercase hover:border-b-2 hover:border-black"
            >
              Login
            </Link>
          </div>
        </form>
      </div>

      <Login />

      <Verify />
    </>
  );
};

export default Signup;
