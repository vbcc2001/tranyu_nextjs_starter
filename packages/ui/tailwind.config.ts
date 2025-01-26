import type { Config } from "tailwindcss";
import sharedConfig from "@tranyu-nextjs-starter/config//tailwind.config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  prefix: "ui-",
  presets: [sharedConfig],
};

export default config;
