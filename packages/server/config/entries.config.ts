import { HtmlEntries } from 'shared/constants/entries'
import { PATH_RESOLVED_CLIENT, PATH_RESOLVED_SERVER } from 'shared/constants/paths'

interface Entry {
  entryPath: string
  modulePath: string
  entryDevPath: string
  moduleDevPath: string
}

export const CONFIG_ENTRIES: Record<HtmlEntries, Entry> = {
  [HtmlEntries.MAIN]: {
    entryPath: `${PATH_RESOLVED_SERVER}/${HtmlEntries.MAIN}.js`,
    modulePath: `src/${HtmlEntries.MAIN}.tsx`,
    entryDevPath: `${PATH_RESOLVED_CLIENT}/src/entries/${HtmlEntries.MAIN}.server.entry.tsx`,
    moduleDevPath: `${PATH_RESOLVED_CLIENT}/src/${HtmlEntries.MAIN}.tsx`,
  },
  [HtmlEntries.SIGN_IN]: {
    entryPath: `${PATH_RESOLVED_SERVER}/${HtmlEntries.SIGN_IN}.js`,
    modulePath: `src/${HtmlEntries.SIGN_IN}.tsx`,
    entryDevPath: `${PATH_RESOLVED_CLIENT}/src/entries/${HtmlEntries.SIGN_IN}.entry.tsx`,
    moduleDevPath: `${PATH_RESOLVED_CLIENT}/src/${HtmlEntries.SIGN_IN}.tsx`,
  },
  [HtmlEntries.SIGN_UP]: {
    entryPath: `${PATH_RESOLVED_SERVER}/${HtmlEntries.SIGN_UP}.js`,
    modulePath: `src/${HtmlEntries.SIGN_UP}.tsx`,
    entryDevPath: `${PATH_RESOLVED_CLIENT}/src/entries/${HtmlEntries.SIGN_UP}.entry.tsx`,
    moduleDevPath: `${PATH_RESOLVED_CLIENT}/src/${HtmlEntries.SIGN_UP}.tsx`,
  },
  [HtmlEntries.INTERNAL_ERROR]: {
    entryPath: `${PATH_RESOLVED_SERVER}/${HtmlEntries.INTERNAL_ERROR}.js`,
    modulePath: `src/${HtmlEntries.INTERNAL_ERROR}.tsx`,
    entryDevPath: `${PATH_RESOLVED_CLIENT}/src/entries/${HtmlEntries.INTERNAL_ERROR}.entry.tsx`,
    moduleDevPath: `${PATH_RESOLVED_CLIENT}/src/${HtmlEntries.MAIN}.tsx`,
  },
  [HtmlEntries.NOT_FOUND]: {
    entryPath: `${PATH_RESOLVED_SERVER}/${HtmlEntries.NOT_FOUND}.js`,
    modulePath: `src/${HtmlEntries.NOT_FOUND}.tsx`,
    entryDevPath: `${PATH_RESOLVED_CLIENT}/src/entries/${HtmlEntries.NOT_FOUND}.entry.tsx`,
    moduleDevPath: `${PATH_RESOLVED_CLIENT}/src/${HtmlEntries.NOT_FOUND}.tsx`,
  },
}
