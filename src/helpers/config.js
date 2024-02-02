export const ACCOUNT_MENU_ITEMS = [
  [
    {
      type: 'link',
      label: 'Favorites',
      link: '/account/favorites?category=all&sortBy=created_at-descending',
    },
    {
      type: 'link',
      label: 'Watchlist',
      link: '/account/watchlist?category=all&sortBy=created_at-descending',
    },
  ],
  [
    { type: 'link', label: 'Edit Profile', link: '/account/edit-profile' },
    { type: 'link', label: 'Settings', link: '/account/settings/change-email' },
  ],
  [{ type: 'button', label: 'Logout' }],
];
