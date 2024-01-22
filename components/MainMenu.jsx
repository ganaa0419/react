import { Menu } from "@/components/icons/Menu";
import { Logo } from "./icons/Logo";
import { CloseIcon } from "./icons/Close";
import { Light } from "./icons/Light";
import { menuItems } from "./Data/MenuItems";
import { useState } from "react";

export function MainMenu({ items }) {
  return (
    <>
      <div className="hidden md:flex">
        {items.map((item) => (
          <a key={item.label} className="px-3 py-2" href={item.link}>
            {item.label}
          </a>
        ))}
      </div>
      <MobileMenu />
    </>
  );
}

function MobileMenu() {
  const [visible, setVisible] = useState(false);

  function openMenu() {
    setVisible(true);
  }

  function closeMenu() {
    setVisible(false);
  }

  const items = menuItems;
  return (
    <>
      <div className="p-1.5 sm:flex md:hidden" onClick={openMenu}>
        <Menu />
      </div>
      {visible && <div className="fixed z-10 bg-gray-100 inset-0 }"></div>}
      <div className={`fixed z-10 bg-white top-0 bottom-0 right-0 w-80 transition-all ${visible ? "right-0" : "-right-full"}`}>
        <div className="p-4 flex justify-between">
          <Logo />
          <div className="p-1.5" onClick={closeMenu}>
            <CloseIcon />
          </div>
        </div>

        <div className="p-4 flex flex-col gap-4 border-y border-gray-100">
          {items.map((item) => (
            <a key={item.label} href={item.link}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="p-4 flex flex-col gap-4">
          <div className="p=1.5 flex justify-between text-gray-600">
            <p>Switch Theme</p>
            <Light />
          </div>
          <button className="bg-gray-900 rounded-xl text-gray-50 py-1.5 px-4 w-full">
            Download CV
          </button>
        </div>
      </div>
    </>
  );
}
