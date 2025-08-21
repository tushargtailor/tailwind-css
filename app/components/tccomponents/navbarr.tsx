import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbarr = () => {
  const links = [
    {
      title: "Guide",
      href: "#",
    },
    {
      title: "Pricing",
      href: "#",
    },
    {
      title: "Login",
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-between py-4 px-4">
      <Link href="/">
        <Image
          draggable={false}
          loading="lazy"
          src="/logo.svg"
          alt="logo"
          height={100}
          width={100}
        />
      </Link>
      <div className="flex items-center gap-8">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="text-neutral-800 font-medium hover:text-neutral-500 transition duration-200"
          >
            {link.title}
          </Link>
        ))}
        <button className="bg-[#2579F4] px-4 py-2 rounded-lg font-bold text-white shadow-lg text-shadow-md tracking-wide">
          Start free trial
        </button>
      </div>
    </div>
  );
};
