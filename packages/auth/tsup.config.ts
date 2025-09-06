import { defineConfig, type Options } from 'tsup'

import { preserveDirectivesPlugin } from 'esbuild-plugin-preserve-directives'

export default defineConfig(
  (opts) =>
    ({
      format: ['esm', 'cjs'],
      external: ['react', 'react-dom'],
      target: 'esnext',
      minify: !opts.watch,
      clean: true,
      dts: true,
      esbuildPlugins: [
        preserveDirectivesPlugin({
          directives: ['use client', 'use strict'],
          include: /\.(js|ts|jsx|tsx)$/,
          exclude: /node_modules/
        })
      ]
    }) as Options
)
