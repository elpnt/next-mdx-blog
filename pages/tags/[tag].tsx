import { GetStaticPaths, GetStaticProps } from 'next'
import { TagFilled } from '@ant-design/icons'
import Container from 'components/Container'
import PostsList from 'components/PostsList'
import { getSortedPostsDataByTag, getAllTags } from 'lib/tags'
import { PostData } from 'types'

type Props = {
  tag: string
  posts: PostData[]
}

export default function PostsByTag({ tag, posts }: Props) {
  return (
    <Container>
      <h1 className="flex text-4xl font-bold mb-5 items-center">
        <TagFilled className="mr-1" />
        {tag}
      </h1>
      <PostsList postsData={posts} />
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getAllTags()
  const paths = tags.map((tag) => {
    return {
      params: {
        tag,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = params.tag as string
  const posts = await getSortedPostsDataByTag(tag)

  return {
    props: {
      tag,
      posts,
    },
  }
}
