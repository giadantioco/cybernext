"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { labels } from "../data/labels";
import MenuIcon from "./MenuIcon";
import CloseIcon from "./CloseIcon";

interface MenuItem {
  name: string;
  path: string;
}

interface NavLinksProps {
  className: string;
  onLinkClick?: () => void;
}

const menuList: MenuItem[] = [
  {
    name: labels.productList,
    path: "/",
  },
  {
    name: labels.navAddProduct,
    path: "/create-product",
  },
  {
    name: labels.navLogin,
    path: "/login",
  },
];

const NavLinks = ({ className, onLinkClick }: NavLinksProps) => {
  const pathname = usePathname();
  return (
    <ul className={className}>
      {menuList.map((item, index) => (
        <li key={index}>
          <Link
            href={item.path}
            onClick={onLinkClick}
            className={`text-right hover:underline ${
              pathname === item.path ? "font-bold underline" : ""
            }`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-petrol font-syne text-white">
      <nav className="flex items-center justify-between py-2 px-4">
        <Link href="/">
          <span className="font-bold text-xl">{labels.navLogoTitle}</span>
        </Link>

        <NavLinks className="hidden md:flex gap-4" />

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden"
          aria-label={labels.navToggleMenu}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <CloseIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </nav>
      {isOpen && (
        <NavLinks className="flex md:hidden flex-col items-end gap-4 px-4" />
      )}
    </header>
  );
};

export default Header;
