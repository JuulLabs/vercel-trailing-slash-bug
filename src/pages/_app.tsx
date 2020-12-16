import React from 'react'

import { AppProps } from 'next/app'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <div>
    _app rendering
    <Component {...pageProps} />
  </div>
)

export default App
