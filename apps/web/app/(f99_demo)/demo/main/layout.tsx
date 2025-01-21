import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppConfig } from "@/app/config";

/**
 * MainLayout组件
 * 
 * @param {Object} props - 组件属性
 * @param {React.ReactNode} props.children - 子组件
 * @returns {JSX.Element} 返回主布局组件
 */
export default function MainLayout({children,}: { children: React.ReactNode}) {
  return (
    <SidebarProvider>
      {/* 应用侧边栏组件 */}
      <AppSidebar />
      <SidebarInset>
        {/* 头部区域 */}
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
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
          </div>
        </header>
        {/* 主要内容区域 */}
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
