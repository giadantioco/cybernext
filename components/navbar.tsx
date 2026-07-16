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

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between py-2 px-4 bg-petrol font-syne text-white">
      <Link href="/">
        <h1 className="font-bold text-xl">{labels.navLogoTitle}</h1>
      </Link>
      <ul className="flex gap-4">
        {menuList.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              className={`flex items-center ${pathname === item.path ? "font-bold underline" : ""
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
