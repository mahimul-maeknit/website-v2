import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Base Next.js configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Your overrides
  {
    rules: {
      "@next/next/no-img-element": "off", // disable <img> warnings
      "@typescript-eslint/no-unused-vars": "warn", // show as warning, not error
    },
  },
];

export default eslintConfig;
