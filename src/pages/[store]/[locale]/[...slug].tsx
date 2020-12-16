import React, { FC } from 'react'

type Props = {
  params: any
}

const MarketingPage: FC<Props> = ({ params }) => (
  <div>Marketing page: {params.slug[0]}</div>
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

export const getStaticProps = async ({ params }) => ({ props: { params } })

export default MarketingPage
