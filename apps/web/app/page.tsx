import Image from 'next/image';
import { AppConfig } from "./config";
import * as TyCard from "@tranyu-nextjs-starter/ui/card"
import React from 'react';

export default function Page() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <TyCard.Demo></TyCard.Demo>
      <TyCard.Card className="w-[350px]">
      <TyCard.Header>
        <TyCard.Title>CardTitle</TyCard.Title>
        <TyCard.Description>CardDescription</TyCard.Description>
      </TyCard.Header>
      <TyCard.Content><div className="grid w-full items-center gap-4">CardContent</div></TyCard.Content>
      <TyCard.Footer className="flex justify-between">CardFooter</TyCard.Footer>
    </TyCard.Card>
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