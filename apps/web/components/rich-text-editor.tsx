"use client";

import React, { useCallback, useState } from "react";
import { createEditor, Descendant } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { cn } from "@/lib/utils"; // ShadCN 的通用工具，用于合并类名

// 定义初始值
const initialValue: Descendant[] = [
  {
    // type: "paragraph",
    children: [{ text: "这是一个自定义的富文本框，支持 Slate 和 ShadCN 样式。" }],
  },
];

// 定义组件
const RichTextEditor: React.FC = () => {
  const [editor] = useState(() => withReact(createEditor()));
  const [value, setValue] = useState<Descendant[]>(initialValue);

  // 渲染不同类型的元素（扩展能力）
  const renderElement = useCallback((props: any) => {
    switch (props.element.type) {
      case "heading":
        return <h2 className="text-lg font-bold" {...props.attributes}>{props.children}</h2>;
      case "quote":
        return <blockquote className="border-l-2 pl-4 italic text-gray-600" {...props.attributes}>{props.children}</blockquote>;
      default:
        return <p className="mb-2" {...props.attributes}>{props.children}</p>;
    }
  }, []);

  // 渲染叶子节点（加粗、斜体等）
  const renderLeaf = useCallback((props: any) => {
    let { children, leaf, attributes } = props;

    if (leaf.bold) {
      children = <strong>{children}</strong>;
    }

    if (leaf.italic) {
      children = <em>{children}</em>;
    }

    return <span {...attributes}>{children}</span>;
  }, []);

  return (
    <div className="border rounded-md shadow-sm p-4">
      <Slate
        editor={editor}
        initialValue={value}
        onChange={(newValue) => setValue(newValue)}
      >
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="请输入内容..."
          className={cn(
            "prose dark:prose-invert", // 使用 ShadCN 的排版样式
            "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          )}
        />
      </Slate>
    </div>
  );
};

export default RichTextEditor;
