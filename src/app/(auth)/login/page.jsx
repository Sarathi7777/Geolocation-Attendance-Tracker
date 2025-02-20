"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

function LoginFormDemo() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
        role: "employee",
        action: "login"
      });

      if (res.error) {
        setError(res.error);
      } else {
        // Login successful, redirect to dashboard or home page
        window.location.href = "/home";
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
    }
  };

  const handleOAuthSignIn = (provider) => {
    signIn(provider, { callbackUrl: "/home" });
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 md:shadow-[0px_5px_0px_5px_#00f7d6_inset,0px_-5px_0px_-5px_#00f7d6_inset] shadow-input bg-black dark:bg-white md:mt-16 mt-16">
      <div className="flex gap-2 ">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-white">
          Welcome to
        </h2>
        <div className="">
          <Image src="/logo.svg" alt="Logo" width="150" height="200" />
        </div>
      </div>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 text-white">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-[#00f7d6] font-semibold">
          Sign-up
        </Link>
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="LewisHamilton@gmail.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input 
            id="password" 
            placeholder="••••••••" 
            type="password" 
            value={formData.password}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#00f7d6_inset,0px_-1px_0px_0px_#00f7d6_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Log in &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-[#00f7d6] dark:via-[#00f7d6] to-transparent my-8 h-[1px] w-full" />

        <div className="flex gap-3">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-100 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="button"
            onClick={() => handleOAuthSignIn("github")}
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-100 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="button"
            onClick={() => handleOAuthSignIn("google")}
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

// ... BottomGradient and LabelInputContainer components remain the same

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default LoginFormDemo;