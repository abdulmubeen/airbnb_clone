"use client";

import { useState, useCallback } from "react";
import useRegisterModal from "@app/hooks/useRegisterModal";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "@app/components/Avatar";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu className="pl-1" />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-[1px_1.75px_5px_2px_rgba(0,0,0,0.1)] w-[45vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={registerModal.onOpen} label="Sign up" />
              <MenuItem onClick={() => {}} label="Log in" />
            </>
            <div className=" border-t-[1px]">
              <MenuItem onClick={() => {}} label="Airbnb your home" />
              <MenuItem onClick={() => {}} label="Help" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
