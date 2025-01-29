import Image from 'next/image';
import { AppConfig } from "./config";
import { TY_UI_Card } from "@tranyu-nextjs-starter/ui"
import React from 'react';

export default function Page() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Image
        src="/logo.svg"
        width={64}
        height={64}
        alt="logo"
        objectFit="cover"
        quality={100}
        priority
      />{AppConfig.title}
    </div>
  )
}