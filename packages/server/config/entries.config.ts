import { HtmlEntries } from 'shared/constants/entries'
import { PATH_RESOLVED_CLIENT, PATH_RESOLVED_SERVER } from 'shared/constants/paths'

interface Entry {
  entryPath: string
  modulePath: string
  entryDevPath: string
  moduleDevPath: string
}

const PATH_ENTRIES = 'src/entries'
const PATH_RESOLVED_ENTRIES = `${PATH_RESOLVED_CLIENT}/${PATH_ENTRIES}`

export const CONFIG_ENTRIES: Record<HtmlEntries, Entry> = {
  [HtmlEntries.MAIN]: {
    entryPath: `${PATH_RESOLVED_SERVER}/main.js`,
    modulePath: `${PATH_ENTRIES}/main/main.entry.tsx`,
    entryDevPath: `${PATH_RESOLVED_ENTRIES}/main/main.render.server.tsx`,
    moduleDevPath: `${PATH_RESOLVED_ENTRIES}/main/main.entry.tsx`,
  },
  [HtmlEntries.SIGN_IN]: {
    entryPath: `${PATH_RESOLVED_SERVER}/signIn.js`,
    modulePath: `${PATH_ENTRIES}/signIn/signIn.entry.tsx`,
    entryDevPath: `${PATH_RESOLVED_ENTRIES}/signIn/signIn.render.tsx`,
    moduleDevPath: `${PATH_RESOLVED_ENTRIES}/signIn/signIn.entry.tsx`,
  },
  [HtmlEntries.SIGN_UP]: {
    entryPath: `${PATH_RESOLVED_SERVER}/signUp.js`,
    modulePath: `${PATH_ENTRIES}/signUp/signUp.entry.tsx`,
    entryDevPath: `${PATH_RESOLVED_ENTRIES}/signUp/signUp.render.tsx`,
    moduleDevPath: `${PATH_RESOLVED_ENTRIES}/signUp/signUp.entry.tsx`,
  },
  [HtmlEntries.INTERNAL_ERROR]: {
    entryPath: `${PATH_RESOLVED_SERVER}/internalError.js`,
    modulePath: `${PATH_ENTRIES}/internalError/internalError.entry.tsx`,
    entryDevPath: `${PATH_RESOLVED_ENTRIES}/internalError/internalError.render.tsx`,
    moduleDevPath: `${PATH_RESOLVED_ENTRIES}/internalError/internalError.entry.tsx`,
  },
  [HtmlEntries.NOT_FOUND]: {
    entryPath: `${PATH_RESOLVED_SERVER}/notFound.js`,
    modulePath: `${PATH_ENTRIES}/notFound/notFound.entry.tsx`,
    entryDevPath: `${PATH_RESOLVED_ENTRIES}/notFound/notFound.render.tsx`,
    moduleDevPath: `${PATH_RESOLVED_ENTRIES}/notFound/notFound.entry.tsx`,
  },
}
