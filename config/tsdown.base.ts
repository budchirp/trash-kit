import { defineConfig } from 'tsdown'

export default defineConfig({
  dts: {
    sourcemap: true
  },
  entry: 'src/**',
  format: ['esm', 'cjs'],
  external: ['react', 'react-dom'],
  platform: 'neutral',
  minify: true,
  treeshake: true,
  sourcemap: true,
  clean: true,
  outputOptions: {
    preserveModules: true
  }
})
