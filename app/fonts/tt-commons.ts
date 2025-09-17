import localFont from 'next/font/local'

export const ttCommons = localFont({
  variable: '--font-tt-commons',
  src: [
    {
      path: '../../public/fonts/tt-commons/TT-Commons-ExtraLight.otf', // Assuming .otf files are in public/fonts/
      weight: '200', // Extra Light
      style: 'normal',
    },
    {
      path: '../../public/fonts/tt-commons/TT-Commons-Regular.otf', // Assuming .otf files are in public/fonts/
      weight: '400', // Regular
      style: 'normal',
    },
    {
      path: '../../public/fonts/tt-commons/TT-Commons-DemiBold.otf', // Assuming .otf files are in public/fonts/
      weight: '600', // Demi Bold
      style: 'normal',
    },
  ],
  display: 'swap',
})
