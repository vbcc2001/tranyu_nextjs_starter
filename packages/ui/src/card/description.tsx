import React from "react"
import { cn } from "@tranyu-nextjs-starter/utils"

// shadcn@2.1.8 复制的 shadcn@2.1.8 组件库
const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
))

// 设置组件的显示名称，便于调试
CardDescription.displayName = "CardDescription"

export default CardDescription