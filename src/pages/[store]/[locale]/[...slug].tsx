import React, { FC } from 'react'

type Props = {
  locale: any
  slug: any
}

const MarketingPage: FC<Props> = ({ locale, slug }) => (
  <div>Locale page: {locale}</div>
  <div>Marketing page: {slug}</div>
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

export const getStaticProps = async ({ params }) => {
  console.log('params', params)
  const { locale, slug } = params

  return { props: {
    locale,
    slug,
  },
  revalidate: 1
 }
}

export default MarketingPage
