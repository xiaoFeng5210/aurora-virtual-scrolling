import { defineConfig } from 'tsdown'

export default defineConfig({
  // 入口文件
  entry: ['src/index.ts'],

  // 输出格式：支持 ESM 和 CJS
  format: ['esm', 'cjs'],

  // 目标环境
  target: 'es2020',

  // 平台：支持浏览器和 Node.js
  platform: 'neutral',

  // 生成类型声明文件
  dts: true,

  // 生成 source map
  sourcemap: true,

  // 清理输出目录
  clean: true,

  // 外部依赖（不打包进最终文件）
  external: [
    // 常见的运行时依赖
    /^node:/,
  ],

  // 输出配置
  outDir: 'dist',

  // 压缩代码
  minify: true, // 库通常不需要压缩，让使用者决定
}) 
