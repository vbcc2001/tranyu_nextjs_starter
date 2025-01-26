import Image from 'next/image';
import { AppConfig } from "./config";
import { TY_UI_Card } from "@tranyu-nextjs-starter/ui"
import React from 'react';

export default function Page() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <TY_UI_Card.Card className="w-[350px]">
        <TY_UI_Card.Header>
          <TY_UI_Card.Title>CardTitle</TY_UI_Card.Title>
          <TY_UI_Card.Description>CardDescription</TY_UI_Card.Description>
        </TY_UI_Card.Header>
        <TY_UI_Card.Content><div className="grid w-full items-center gap-4">CardContent</div></TY_UI_Card.Content>
        <TY_UI_Card.Footer className="flex justify-between">CardFooter</TY_UI_Card.Footer>
      </TY_UI_Card.Card>
      <TY_UI_Card.Demo></TY_UI_Card.Demo>
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