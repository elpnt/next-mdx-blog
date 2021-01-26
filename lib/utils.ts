import DOMParser from 'dom-parser'
import { PostData } from 'types'

export function sortDescDate(a: PostData, b: PostData): number {
  if (a.frontmatter.date < b.frontmatter.date) {
    return 1
  } else {
    return -1
  }
}

export function getExcerptFromPost(post: PostData) {
  const parser = new DOMParser()
  const dom = parser.parseFromString(post.mdxSource.renderedOutput)
  const parapraphs = dom.getElementsByTagName('p')
  let excerpt = ''
  for (let i = 0; i < parapraphs.length; ++i) {
    excerpt += parapraphs[i].textContent
  }
  return excerpt.slice(0, 200)
}
