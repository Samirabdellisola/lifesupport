export const AppPaths = {
  home: '/',
  user: '/user',
  campaign: {
    root: '/campaign',
    create: '/campaign/create',
    detail: '/campaign/:id',
    goTo: (id: string) => `/campaign/${id}`,
  },
  rankings: '/rankings',
} as const
