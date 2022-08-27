import { PageRoutes } from 'client/src/browser/http/constants'

export const links: Array<{ title: string; items: Array<{ text: string; link: string }> }> = [
  {
    title: 'Marketplace',
    items: [
      { text: 'Authors', link: PageRoutes.ROOT },
      { text: 'Collectibles', link: PageRoutes.ROOT },
      { text: 'Top', link: PageRoutes.ROOT },
      { text: 'Trending', link: PageRoutes.ROOT },
    ],
  },
  {
    title: 'My Account',
    items: [
      { text: 'Profile', link: PageRoutes.ROOT },
      { text: 'Favorites', link: PageRoutes.ROOT },
      { text: 'My Collections', link: PageRoutes.ROOT },
      { text: 'Settings', link: PageRoutes.SETTINGS },
    ],
  },
  {
    title: 'Resources',
    items: [
      { text: 'Help Center', link: PageRoutes.HELP },
      { text: 'Platform Status', link: PageRoutes.ROOT },
      { text: 'Partners', link: PageRoutes.ROOT },
      { text: 'Blog', link: PageRoutes.ROOT },
    ],
  },
  {
    title: 'Company',
    items: [
      { text: 'About', link: PageRoutes.ABOUT },
      { text: 'Careers', link: PageRoutes.ROOT },
    ],
  },
]
