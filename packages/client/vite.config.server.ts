import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react'
import { InlineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { HtmlEntries } from '../shared/constants/entries'
import { PATH_SERVER } from '../shared/constants/paths'

const PATH_ENTRIES = './src/entries'

/**
 * @link https://vitejs.dev/config/
 */
const inlineConfig: InlineConfig = {
  publicDir: false,
  clearScreen: false,
  plugins: [react(), vanillaExtractPlugin(), tsconfigPaths()],
  server: { middlewareMode: 'ssr' },
  build: {
    ssr: true,
    emptyOutDir: true,
    outDir: `../../dist/${PATH_SERVER}`,
    rollupOptions: {
      input: {
        [HtmlEntries.MAIN]: `${PATH_ENTRIES}/main/main.render.server.tsx`,
        [HtmlEntries.SIGN_IN]: `${PATH_ENTRIES}/signIn/signIn.render.tsx`,
        [HtmlEntries.SIGN_UP]: `${PATH_ENTRIES}/signUp/signUp.render.tsx`,
        [HtmlEntries.INTERNAL_ERROR]: `${PATH_ENTRIES}/internalError/internalError.render.tsx`,
        [HtmlEntries.NOT_FOUND]: `${PATH_ENTRIES}/notFound/notFound.render.tsx`,
      },
    },
  },
}

export default inlineConfig
