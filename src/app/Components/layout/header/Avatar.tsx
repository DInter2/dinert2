'use client';

import Image from "next/image";
import { MouseEventHandler } from "react";

interface AvatarProps {
  onClick: MouseEventHandler<HTMLImageElement>
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src, onClick }) => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={src || '/images/placeholder.jpg'}
      onClick={onClick}
    />
   );
}

export default Avatar;
