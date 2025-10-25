import { defineConfig } from 'tsdown'

export default defineConfig({
  dts: {
    sourcemap: true
  },
  entry: 'src/**/*.ts',
  format: ['esm', 'cjs'],
  external: ['react', 'react-dom'],
  treeshake: false,
  minify: false,
  target: 'esnext',
  sourcemap: true,
  clean: true
})
