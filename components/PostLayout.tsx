import hydrate from 'next-mdx-remote/hydrate'
import Container from 'components/Container'
import PostSEO from 'components/PostSEO'
import { PostData } from 'types'

type Props = {
  postData: PostData
}

export default function PostLayout({ postData }: Props) {
  const content = hydrate(postData.mdxSource)
  return (
    <Container>
      <PostSEO postData={postData} />
      <article className="flex flex-col justify-between items-start px-4">
        <div className="prose lg:prose-lg max-w-none w-full">{content}</div>
      </article>
    </Container>
  )
}
