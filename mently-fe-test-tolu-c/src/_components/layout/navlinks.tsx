"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentType, SVGProps } from "react";
import {
  ActivityIcon,
  BarChartIcon,
  BookIcon,
  FileTextIcon,
  GiftIcon,
  HomeIcon,
  LogoutIcon,
  SettingIcon,
  UsersIcon,
  WalletIcon,
} from "~/assets/icons";
import { cn } from "~/utils/cn";

const navlinkList: Array<{
  name: string;
  path: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  isComing?: boolean;
}> = [
    { name: "Dashboard", path: "/", Icon: HomeIcon },
    { name: "Programs", path: "/programs", Icon: BookIcon },
    { name: "Activities", path: "/activities", Icon: ActivityIcon },
    { name: "Users", path: "/users", Icon: UsersIcon },
    { name: "Forums", path: "/forums", Icon: FileTextIcon },
    { name: "Finances", path: "/finances", Icon: WalletIcon },
    { name: "Rewards", path: "/rewards", Icon: GiftIcon },
    { name: "Analytics", path: "/analytics", Icon: BarChartIcon, isComing: true },
    { name: "Settings", path: "/settings", Icon: SettingIcon },
  ];

export const Navlinks = () => {
  const pathName = usePathname();
  return (
    <nav className="w-full flex flex-col items-start gap-2">
      {navlinkList.map(({ name, path, Icon }, index) => (
        <Link
          href={path}
          key={index}
          className={cn(
            "w-full h-13 flex items-center gap-8 rounded-lg py-4 px-8 bg-transparent text-grey-4 text-base",
            {
              "bg-white text-[#1F0954]": pathName === path,
            },
          )}
        >
          <Icon />
          <span>{name}</span>
        </Link>
      ))}
      <button className="w-full cursor-pointer h-13 flex items-center gap-8 rounded-lg py-4 px-8 bg-transparent text-grey-4 text-base">
        <LogoutIcon />
        Logout
      </button>
    </nav>
  );
};
