import localFont from &apos;next/font/local&apos;

export const ttCommons = localFont({
  variable: &apos;--font-tt-commons&apos;,
  src: [
    {
      path: &apos;../../public/fonts/tt-commons/TT-Commons-ExtraLight.otf&apos;, // Assuming .otf files are in public/fonts/
      weight: &apos;200&apos;, // Extra Light
      style: &apos;normal&apos;,
    },
    {
      path: &apos;../../public/fonts/tt-commons/TT-Commons-Regular.otf&apos;, // Assuming .otf files are in public/fonts/
      weight: &apos;400&apos;, // Regular
      style: &apos;normal&apos;,
    },
    {
      path: &apos;../../public/fonts/tt-commons/TT-Commons-DemiBold.otf&apos;, // Assuming .otf files are in public/fonts/
      weight: &apos;600&apos;, // Demi Bold
      style: &apos;normal&apos;,
    },
  ],
  display: &apos;swap&apos;,
})
