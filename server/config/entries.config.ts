import { HtmlEntries, PATH_CLIENT, PATH_DIST_SERVER } from 'server/common/constants'

export const CONFIG_ENTRIES: Record<
  string,
  { entryPath: string; entryDevPath: string; modulePath: string }
> = {
  [HtmlEntries.MAIN]: {
    entryPath: `${PATH_DIST_SERVER}/${HtmlEntries.MAIN}.js`,
    entryDevPath: `${PATH_CLIENT}/entries/${HtmlEntries.MAIN}.server.entry.tsx`,
    modulePath: `${PATH_CLIENT}/${HtmlEntries.MAIN}.tsx`,
  },
  [HtmlEntries.INTERNAL_ERROR]: {
    entryPath: `${PATH_DIST_SERVER}/${HtmlEntries.INTERNAL_ERROR}.js`,
    entryDevPath: `${PATH_CLIENT}/entries/${HtmlEntries.INTERNAL_ERROR}.entry.tsx`,
    modulePath: `${PATH_CLIENT}/${HtmlEntries.INTERNAL_ERROR}.tsx`,
  },
}
