import Head from 'next/head'
import { getExcerptFromPost } from 'lib/utils'
import { PostData } from 'types'

type Props = {
  postData: PostData
}

export default function SEO({ postData }: Props) {
  const { title, image } = postData.frontmatter
  const og_image = image || `https://particles-og-image.vercel.app/${title}.png`
  const description = getExcerptFromPost(postData)
  return (
    <Head>
      <title>{title}</title>
      <meta content={description} name="description" />
      <meta property="og:url" content="example.com" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Next.js + TypeScript Blog" />
      <meta property="og:description" content={`${description}`} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={og_image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={og_image} />
    </Head>
  )
}
