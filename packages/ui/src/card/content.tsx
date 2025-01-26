import React from "react"
import { cn } from "@tranyu-nextjs-starter/utils"

// shadcn@2.1.8 复制的 shadcn@2.1.8 组件库
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))

// 设置组件的显示名称，便于调试
CardContent.displayName = "CardContent"

export default CardContent