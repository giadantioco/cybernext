"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { labels } from "../data/labels";

interface MenuItem {
  name: string;
  path: string;
}

const menuList: MenuItem[] = [
  {
    name: labels.navHome,
    path: "/",
  },
  {
    name: labels.navCreate,
    path: "/create",
  },

  {
    name: labels.navProfile,
    path: "/profile",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between py-2 px-4 bg-petrol font-syne text-white">
      <h1 className="font-bold text-xl">{labels.logoTitle}</h1>
      <ul className="flex gap-4">
        {menuList.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              className={`flex items-center ${
                pathname === item.path ? "font-bold underline" : ""
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
