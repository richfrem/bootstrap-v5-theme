import { defineConfig } from 'vite';
import { resolve } from 'path';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        demo: resolve(__dirname, 'demo.html'),
        introduction: resolve(__dirname, 'introduction.html'),
        bootstrap: resolve(__dirname, 'src/js/bootstrap-theme.js')
      },
      output: {
        entryFileNames: 'js/bootstrap-theme.min.js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `images/[name][extname]`;
          }
          
          if (extType === 'css') {
            return 'css/bootstrap-theme.min.css';
          }
          
          return 'assets/[name][extname]';
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['node_modules']
      },
    },
    postcss: {
      plugins: [
        autoprefixer(),
      ],
    },
  },
  // Ensure proper handling of static assets
  publicDir: 'public',
});