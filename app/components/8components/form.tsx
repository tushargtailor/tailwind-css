import { cn } from "@/app/lib/utils";
import React from "react";

export const Form = () => {
  return (
    <form className="h-full w-full bg-gray-100 px-8 py-14">
      <h1 className="bg-gradient-to-b from-neutral-800 to-neutral-700 bg-clip-text text-center text-4xl font-bold tracking-tighter text-transparent">
        This is{" "}
        <span
          className={cn(
            "relative z-10 inline-block text-white",
            "after:absolute after:inset-0 after:-z-10 after:h-full after:w-full after:-skew-2 after:bg-red-500 after:content-['']",
          )}
        >
          crazy
        </span>{" "}
        level form.
      </h1>

      <div className="mx-auto my-12 flex max-w-sm flex-col gap-8">
        <Group>
          <Label
            htmlFor="Firstname"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            First Name
          </Label>
          <Input name="Firstname" type="text" placeholder="Enter your name" />
        </Group>

        <Group>
          <Label
            htmlFor="email"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            Email
          </Label>
          <Input name="email" type="email" placeholder="Enter your email" />
        </Group>

        <Group>
          <Label
            htmlFor="company"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            Company
          </Label>
          <Input
            name="company"
            type="text"
            placeholder="Enter your company name"
          />
        </Group>

        <Group>
          <Label
            htmlFor="message"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            Message
          </Label>
          <Input name="message" type="text" placeholder="Enter your message" />
        </Group>
        <button className="cursor-pointer rounded-md bg-black px-4 py-2 text-white transition duration-150 hover:-translate-y-0.5 hover:bg-neutral-700 active:scale-98">
          Send that text now
        </button>
      </div>
    </form>
  );
};

const Group = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

const Label = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label {...props} className={cn("font-medium text-neutral-700", className)}>
      {children}
    </label>
  );
};

const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={cn(
        "shadow-input rounded-lg border border-transparent bg-white px-4 py-2 transition-all duration-200 placeholder:text-neutral-300 focus:border-gray-300 focus:bg-gray-100 focus:ring-2 focus:ring-gray-300 focus:ring-offset-4 focus:outline-none",
        className,
      )}
    />
  );
};
