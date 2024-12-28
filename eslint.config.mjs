import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// __filename aur __dirname ko define karna
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// FlatCompat ka use karte hue ESLint config generate karna
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// ESLint config ko extend karna
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Rules ko specify karna
  {
    rules: {
      "react/no-unescaped-entities": "off", // Disable the rule
    },
  },
];

export default eslintConfig;
