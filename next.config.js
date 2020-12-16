const stores = {
  'mystore-us': {
    'locales': [
      'en-US'
    ],
  }
}

const rewrites = []

for (const store in stores) {
  const { locales } = stores[store]

  // Homepage
  for (const locale of locales) {
    rewrites.push({
      destination: `/${store}/${locale}/home`,
      source: `/${store}/${locale}`,
    })
  }

  // Rerewrites for single-locale stores, to allow their locale to be omitted
  // from URL params
  if (locales.length === 1) {
    rewrites.push(...[
      {
        destination: `/${store}/${locales[0]}/home`,
        source: `/${store}`,
      },
      {
        destination: `/${store}/${locales[0]}/:path*`,
        source: `/${store}/:path*`,
      },
    ])
  }
}

module.exports = {
  rewrites: async () => rewrites,
}
