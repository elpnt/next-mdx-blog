import Head from 'next/head'
import { MdxRemote } from 'next-mdx-remote/types'
import { getExcerptFromPost } from 'lib/utils'
import { FrontMatter, PostData } from 'types'

type Props = {
  postData: PostData
}

export default function SEO({ postData }: Props) {
  const { title, date } = postData.frontmatter
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
      <meta property="og:image" content="hoge" />
    </Head>
  )
}
