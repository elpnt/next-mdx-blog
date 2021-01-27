import hydrate from 'next-mdx-remote/hydrate'
import Container from 'components/Container'
import PostSEO from 'components/PostSEO'
import PostHeader from 'components/PostHeader'
import { PostData } from 'types'

type Props = {
  postData: PostData
}

export default function PostLayout({ postData }: Props) {
  const content = hydrate(postData.mdxSource)
  return (
    <Container>
      <PostSEO postData={postData} />
      <article className="flex flex-col justify-between items-start max-w-3xl mx-auto">
        <PostHeader postData={postData} />
        <div className="prose sm:prose-sm lg:prose-lg max-w-none">
          {content}
        </div>
      </article>
    </Container>
  )
}
