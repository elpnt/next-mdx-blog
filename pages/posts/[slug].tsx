import hydrate from 'next-mdx-remote/hydrate'
import { MDXProvider } from '@mdx-js/react'
import { MdxRemote } from 'next-mdx-remote/types'
import { getAllPosts, getPostsDataBySlug } from 'lib/posts'

type Props = {
  frontmatter: {
    date: string
    title: string
    tags: string[]
  }
  mdxSource: MdxRemote.Source
}

export default function Post({ frontmatter, mdxSource }: Props) {
  const content = hydrate(mdxSource)
  return (
    <MDXProvider>
      <article className="prose">{content}</article>
    </MDXProvider>
  )
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx$/, ''),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = await getPostsDataBySlug(params.slug)
  return {
    props: post,
  }
}
