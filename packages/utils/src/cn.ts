import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


// 定义一个名为 cn 的函数，用来合并类名
export function cn(...inputs: ClassValue[]) {
  // 使用 clsx 来动态组合类名，再通过 twMerge 来合并冲突的 Tailwind 类名
  return twMerge(clsx(inputs))
}
