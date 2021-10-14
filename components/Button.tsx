import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
}

function Button({ text, href }: ButtonProps) {
  return (
    <Link href={href}>
      <a className="bg-primary block py-3 px-6 rounded text-gray-900 font-medium">
        {text}
      </a>
    </Link>
  );
}

export default Button;
