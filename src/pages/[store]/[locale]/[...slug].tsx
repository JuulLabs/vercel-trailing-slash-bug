import React, { FC } from 'react'

type Props = {
  slugString: any
}

const MarketingPage: FC<Props> = ({ slugString }) => (
  <div>Marketing page: {slugString}</div>
)

const route = {
  store: 'mystore-us',
  locale: 'en-US',
}

export const getStaticPaths = async () => ({
  paths: [
    { params: { ...route, slug: ['about-us'] } },
    { params: { ...route, slug: ['home'] } },
  ],
  fallback: false
})

export const getStaticProps = async ({ params: { locale, slug } }) => {
  const slugString = slug.join('/')

  return { props: {
    locale,
    slugString,
  },
  revalidate: 600
 }
}

export default MarketingPage
