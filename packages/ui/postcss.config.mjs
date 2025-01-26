export default {
  plugins: {
    /** 用于处理 TailwindCSS 的核心功能，
     * 在 v4 中，导入和供应商前缀现在会自动为你处理，
     * 因此你可以删除 postcss-import 和 autoprefixer（如果它们在你的项目中）
     */
    "@tailwindcss/postcss": {}, 
  },
};