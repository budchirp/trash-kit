import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/index.ts',
  format: ['esm', 'cjs'],
  platform: 'neutral',
  minify: true,
  treeshake: true,
  sourcemap: true,
  clean: true,
  dts: {
    sourcemap: true
  },
  outputOptions: {
    preserveModules: true
  },
  deps: {
    neverBundle: ['react', 'react-dom']
  },
})
