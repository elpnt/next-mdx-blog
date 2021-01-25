import Link from 'next/link'
import Date from './Date'
import Tags from './Tags'
import { PostData } from 'types'

import DOMParser from 'dom-parser'

export default function PostCard({ postData }: { postData: PostData }) {
  const excerpt = getExcerptFromPost(postData)

  return (
    <article className="my-4 p-4">
      <Date dateString={postData.frontmatter.date} />
      <Link href={`/posts/${postData.slug}`}>
        <a className="text-2xl lg:text-4xl font-bold hover:underline">
          {postData.frontmatter.title}
        </a>
      </Link>
      <p className="lg:text-lg my-1">
        {excerpt} ...{' '}
        <Link href={`/posts/${postData.slug}`}>
          <a className="ml-2 font-semibold">Read more</a>
        </Link>
      </p>
      <Tags tags={postData.frontmatter.tags} />
    </article>
  )
}

function getExcerptFromPost(post: PostData) {
  const parser = new DOMParser()
  const dom = parser.parseFromString(post.mdxSource.renderedOutput)
  const parapraphs = dom.getElementsByTagName('p')
  let excerpt = ''
  for (let i = 0; i < parapraphs.length; ++i) {
    excerpt += parapraphs[i].textContent
  }
  return excerpt.slice(0, 300)
}
