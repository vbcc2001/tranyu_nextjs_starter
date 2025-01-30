import { AppSidebar } from "@/components/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@tranyu-nextjs-starter/ui/ui/breadcrumb"

import { Separator } from "@tranyu-nextjs-starter/ui/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@tranyu-nextjs-starter/ui/components/sidebar"

/**
 * MainLayout组件
 * 
 * @param {Object} props - 组件属性
 * @param {React.ReactNode} props.children - 子组件
 * @returns {JSX.Element} 返回主布局组件
 */
// export default function MainLayout({ children }: { children: React.ReactNode }) {
export default function Page() {
  return (
    <SidebarProvider>
      {/* 应用侧边栏组件 */}
      <AppSidebar />
      <SidebarInset>
        {/* 头部区域 */}
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          {/* 侧边栏触发器 */}
          <SidebarTrigger className="-ml-1" />
          {/* 垂直分隔线 */}
          <Separator orientation="vertical" className="mr-2 h-4" />
          {/* 面包屑导航 */}
          <Breadcrumb>
            <BreadcrumbList>
              {/* 在中等屏幕及以上显示的面包屑项 */}
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              {/* 当前页面的面包屑项 */}
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        {/* 主要内容区域 */}
        {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div> */}
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}