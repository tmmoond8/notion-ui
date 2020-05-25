import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      name: 'tmmoond8_NotionUI',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      name: 'tmmoond8_NotionUI',
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    typescript({
      exclude: "**/__tests__/**",
    }),
    commonjs({
      include: ["node_modules/**"],
    })
  ]
};