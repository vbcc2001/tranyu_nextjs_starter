import { cn } from "@tranyu-nextjs-starter/utils";
import React from "react";

const CardHeader = React.forwardRef<HTMLDivElement,React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref}className={cn("flex flex-col space-y-1.5 p-6", className)} {...props}/>
))
// 设置组件的显示名称，便于调试
CardHeader.displayName = "Card.Header"

