import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPosts, getPostDataBySlug } from 'lib/posts'
import PostLayout from 'components/PostLayout'
import { PostData } from 'types'

type Props = {
  postData: PostData
}

export default function Post({ postData }: Props) {
  return <PostLayout postData={postData} />
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
  const postData = await getPostDataBySlug(params.slug)
  return {
    props: {
      postData,
    },
  }
}
