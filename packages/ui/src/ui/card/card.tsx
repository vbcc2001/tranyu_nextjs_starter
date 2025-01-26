import React from "react"
import { cn } from "@tranyu-nextjs-starter/utils"

// shadcn@2.1.8 复制的 shadcn@2.1.8 组件库
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-xl border bg-card text-card-foreground shadow", className)} {...props} />
))

// 设置组件的显示名称，便于调试
Card.displayName = "Card"

export default Card