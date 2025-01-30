import {
  Card,
  Content,
  Description,
  Footer,
  Header,
  Title,
} from "./index_bak.js"


export function CardDemo() {
  return (
    <Card className="w-[350px]">
      <Header>
        <Title>CardTitle111</Title>
        <Description>CardDescription</Description>
      </Header>
      <Content><div className="grid w-full items-center gap-4">CardContent</div></Content>
      <Footer className="flex justify-between">CardFooter</Footer>
    </Card>
  )
}

export default CardDemo