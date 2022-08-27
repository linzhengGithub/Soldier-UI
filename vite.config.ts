import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

// https://vitejs.dev/config/

const rollupOptions = {

  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({

  plugins: [
    vue(),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
  })
  ],
  // 添加库模式配置
  build: {
    rollupOptions,
    minify:false,
    lib: {
      entry: "./src/entry.ts",
      name: "SoldierUI",
      fileName: "soldier-ui",
      // 导出模块格式
      formats: ["es", "umd","iife"],
    },
  },

});
