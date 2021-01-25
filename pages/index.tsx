import { GetStaticProps } from 'next'
import Container from 'components/Container'
import PostsList from 'components/PostsList'
import { getSortedPostsData } from 'lib/posts'
import { PostData } from 'types'

export default function Home({ postsData }: { postsData: PostData[] }) {
  return (
    <Container>
      <PostsList postsData={postsData} />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const postsData = await getSortedPostsData()
  return {
    props: {
      postsData,
    },
  }
}
