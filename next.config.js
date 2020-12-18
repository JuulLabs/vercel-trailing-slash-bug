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

  // Rerewrites for single-locale stores, to allow their locale to be omitted
  // from URL params
  //if (locales.length === 1) {
    rewrites.push(...[
      {
        destination: `/${store}/${locales[0]}/:path*`,
        source: `/${store}/:path((?![a-z]{2}-[A-Z]{2}/).*)`,
      },
    ])
  //}
}

module.exports = {
  rewrites: async () => rewrites,
}
