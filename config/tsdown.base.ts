import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/index.ts',
  format: ['esm'],
  platform: 'node',
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
