import { TY_UI_Card } from "@tranyu-nextjs-starter/ui"
import React from 'react';

export default function Page() {
  return (
    <>
      <TY_UI_Card.Card className="w-[350px]">
      <TY_UI_Card.Header>
        <TY_UI_Card.Title>CardTitle</TY_UI_Card.Title>
        <TY_UI_Card.Description>CardDescription</TY_UI_Card.Description>
      </TY_UI_Card.Header>
      <TY_UI_Card.Content><div className="grid w-full items-center gap-4">CardContent</div></TY_UI_Card.Content>
      <TY_UI_Card.Footer className="flex justify-between">CardFooter</TY_UI_Card.Footer>
      </TY_UI_Card.Card>
    </>
  )
}


