export const NAVIGATION_MENU = [
  {
    link: '/dashboard',
    label: 'Dashboard',
    icon: 'material-symbols:home-outline-rounded',
    admin: true,
    user: true,
  },
  {
    link: '/musics',
    label: 'Musics',
    icon: 'solar:music-library-2-line-duotone',
    admin: true,
    user: false,
  },
  {
    link: '/assetsEditor',
    label: 'Assets Editor',
    icon: 'solar:gallery-wide-bold',
    admin: true,
    user: false,
  },
  {
    link: '/history',
    label: 'History Payment',
    icon: 'akar-icons:history',
    admin: true,
    user: true,
  },
  {
    link: '/qrscanner',
    label: 'QR Scanner',
    icon: 'mdi:qrcode-scan',
    admin: true,
    user: true,
  },
  {
    link: '/thema',
    label: 'Thema',
    icon: 'material-symbols:image-outline',
    admin: false,
    user: true,
  },
]
