import type { Metadata } from "next";
import { AppConfig } from "./config";
import "./globals.css";

/**
 * 应用程序的元数据
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
};

/**
 * RootLayout 组件
 * 
 * 此组件作为整个应用程序的根布局。
 * 它设置 HTML 结构，应用字体变量，并渲染子组件。
 *
 * @param {Object} props - 组件属性
 * @param {React.ReactNode} props.children - 在布局中要渲染的子组件
 * @returns {JSX.Element} 根布局结构
 */
export default function RootLayout({children,}: { children: React.ReactNode}) {
  return (
    <html lang="zh-cn">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      {/* antialiased 启用字体的抗锯齿效果 */}
      <body className="antialiased" >
        {children}
      </body>
    </html>
  );
}