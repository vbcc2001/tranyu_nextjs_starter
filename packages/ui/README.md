# UI 组件包

## 注意  package.json 配置

### 不要 配置 main module types等 ，会影响 Next.js 中的 transpilePackages 配置

如 main 指向预编译文件（如 dist/index.js），那么即使添加到 transpilePackages 中，Next.js 也不会重新编译这些文件。

```json
  "main": "dist/index.js",
  "module": "dist/index.js",
  "types": "dist/index.d.ts",
```
