export const AppPaths = {
  home: '/',
  user: '/user',
  campaign: {
    root: '/campaign',
    detail: '/campaign/:id',
    goTo: (id: string) => `/campaign/${id}`,
  },
} as const
