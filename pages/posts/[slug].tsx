import { GetStaticPaths, GetStaticProps } from 'next'
import hydrate from 'next-mdx-remote/hydrate'
import { MDXProvider } from '@mdx-js/react'
import { MdxRemote } from 'next-mdx-remote/types'
import { getAllPosts, getPostDataBySlug } from 'lib/posts'
import PostLayout from 'components/PostLayout'
import { FrontMatter } from 'types'

type Props = {
  frontmatter: FrontMatter
  mdxSource: MdxRemote.Source
}

export default function Post({ frontmatter, mdxSource }: Props) {
  const content = hydrate(mdxSource)
  return <PostLayout frontmatter={frontmatter}>{content}</PostLayout>
}

export const getStaticPaths: GetStaticPaths = async () => {
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

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: { slug: string }
}) => {
  const post = await getPostDataBySlug(params.slug)
  return {
    props: post,
  }
}
