import React, { forwardRef } from "react";

// 定义组件的 Props 类型，包含 children
type CardHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode; // 确保 children 是可选的
};

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={className || ""}
        {...props}
      >
        {children} {/* 渲染子元素 */}
      </div>
    );
  }
);

// 设置组件的显示名称，便于调试
CardHeader.displayName = "CardHeader1";
