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
    entryPath: `${PATH_RESOLVED_SERVER}/${HtmlEntries.MAIN}.js`,
    modulePath: `${PATH_ENTRIES}/${HtmlEntries.MAIN}/${HtmlEntries.MAIN}.entry.tsx`,
    entryDevPath: `${PATH_RESOLVED_ENTRIES}/${HtmlEntries.MAIN}/${HtmlEntries.MAIN}.render.server.tsx`,
    moduleDevPath: `${PATH_RESOLVED_ENTRIES}/${HtmlEntries.MAIN}/${HtmlEntries.MAIN}.entry.tsx`,
  },
  [HtmlEntries.SIGN_IN]: {
    entryPath: `${PATH_RESOLVED_SERVER}/${HtmlEntries.SIGN_IN}.js`,
    modulePath: `${PATH_ENTRIES}/${HtmlEntries.SIGN_IN}/${HtmlEntries.SIGN_IN}.entry.tsx`,
    entryDevPath: `${PATH_RESOLVED_ENTRIES}/${HtmlEntries.SIGN_IN}/${HtmlEntries.SIGN_IN}.render.tsx`,
    moduleDevPath: `${PATH_RESOLVED_ENTRIES}/${HtmlEntries.SIGN_IN}/${HtmlEntries.SIGN_IN}.entry.tsx`,
  },
  [HtmlEntries.SIGN_UP]: {
    entryPath: `${PATH_RESOLVED_SERVER}/${HtmlEntries.SIGN_UP}.js`,
    modulePath: `${PATH_ENTRIES}/${HtmlEntries.SIGN_UP}/${HtmlEntries.SIGN_UP}.entry.tsx`,
    entryDevPath: `${PATH_RESOLVED_ENTRIES}/${HtmlEntries.SIGN_UP}/${HtmlEntries.SIGN_UP}.render.tsx`,
    moduleDevPath: `${PATH_RESOLVED_ENTRIES}/${HtmlEntries.SIGN_UP}/${HtmlEntries.SIGN_UP}.entry.tsx`,
  },
  [HtmlEntries.INTERNAL_ERROR]: {
    entryPath: `${PATH_RESOLVED_SERVER}/${HtmlEntries.INTERNAL_ERROR}.js`,
    modulePath: `${PATH_ENTRIES}/${HtmlEntries.INTERNAL_ERROR}/${HtmlEntries.INTERNAL_ERROR}.entry.tsx`,
    entryDevPath: `${PATH_RESOLVED_ENTRIES}/${HtmlEntries.INTERNAL_ERROR}/${HtmlEntries.INTERNAL_ERROR}.render.tsx`,
    moduleDevPath: `${PATH_RESOLVED_ENTRIES}/${HtmlEntries.INTERNAL_ERROR}/${HtmlEntries.INTERNAL_ERROR}.entry.tsx`,
  },
  [HtmlEntries.NOT_FOUND]: {
    entryPath: `${PATH_RESOLVED_SERVER}/${HtmlEntries.NOT_FOUND}.js`,
    modulePath: `${PATH_ENTRIES}/${HtmlEntries.NOT_FOUND}/${HtmlEntries.NOT_FOUND}.entry.tsx`,
    entryDevPath: `${PATH_RESOLVED_ENTRIES}/${HtmlEntries.NOT_FOUND}/${HtmlEntries.NOT_FOUND}.render.tsx`,
    moduleDevPath: `${PATH_RESOLVED_ENTRIES}/${HtmlEntries.NOT_FOUND}/${HtmlEntries.NOT_FOUND}.entry.tsx`,
  },
}
