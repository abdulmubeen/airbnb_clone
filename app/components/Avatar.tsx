"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      height={27}
      width={27}
      alt="avatar"
      src={"/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
