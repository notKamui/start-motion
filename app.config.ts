import { defineConfig } from '@tanstack/react-start/config'
import viteTsConfigPaths from 'vite-tsconfig-paths'

const config = defineConfig({
  tsr: {
    appDirectory: 'src',
  },
  vite: {
    plugins: [
      viteTsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
    optimizeDeps: {
      exclude: ['@tanstack/react-router-devtools'],
    }
  },
  server: {
  }
})

export default config
