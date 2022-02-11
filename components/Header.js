import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

const menuList = [
  { title: "HOME", Icon: HomeIcon },
  { title: "TRENDING", Icon: LightningBoltIcon },
  { title: "VERIFIED", Icon: BadgeCheckIcon },
  { title: "COLLECTIONS", Icon: CollectionIcon },
  { title: "SEARCH", Icon: SearchIcon },
  { title: "ACCOUNT", Icon: UserIcon },
];

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {menuList.map((menu, index) => (
          <HeaderItem key={index} title={menu.title} Icon={menu.Icon} />
        ))}
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="hululogo"
      />
    </header>
  );
}

export default Header;
