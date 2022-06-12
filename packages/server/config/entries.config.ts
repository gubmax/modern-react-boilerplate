import { HtmlEntries } from 'shared/constants/entries'
import { PATH_RESOLVED_CLIENT, PATH_RESOLVED_SERVER } from 'shared/constants/paths'

interface Entry {
  entryPath: string
  modulePath: string
  entryDevPath: string
  moduleDevPath: string
}

export const CONFIG_ENTRIES: Record<string, Entry> = {
  [HtmlEntries.MAIN]: {
    // Production
    entryPath: `${PATH_RESOLVED_SERVER}/${HtmlEntries.MAIN}.js`,
    modulePath: `src/${HtmlEntries.MAIN}.tsx`,
    // Development
    entryDevPath: `${PATH_RESOLVED_CLIENT}/src/entries/${HtmlEntries.MAIN}.server.entry.tsx`,
    moduleDevPath: `${PATH_RESOLVED_CLIENT}/src/${HtmlEntries.MAIN}.tsx`,
  },
  [HtmlEntries.INTERNAL_ERROR]: {
    // Production
    entryPath: `${PATH_RESOLVED_SERVER}/${HtmlEntries.INTERNAL_ERROR}.js`,
    modulePath: `src/${HtmlEntries.INTERNAL_ERROR}.tsx`,
    // Development
    entryDevPath: `${PATH_RESOLVED_CLIENT}/src/entries/${HtmlEntries.INTERNAL_ERROR}.entry.tsx`,
    moduleDevPath: `${PATH_RESOLVED_CLIENT}/src/${HtmlEntries.MAIN}.tsx`,
  },
  [HtmlEntries.NOT_FOUND]: {
    // Production
    entryPath: `${PATH_RESOLVED_SERVER}/${HtmlEntries.NOT_FOUND}.js`,
    modulePath: `src/${HtmlEntries.NOT_FOUND}.tsx`,
    // Development
    entryDevPath: `${PATH_RESOLVED_CLIENT}/src/entries/${HtmlEntries.NOT_FOUND}.entry.tsx`,
    moduleDevPath: `${PATH_RESOLVED_CLIENT}/src/${HtmlEntries.NOT_FOUND}.tsx`,
  },
}
