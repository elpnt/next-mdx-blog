import { PostData } from 'types'

export function sortDescDate(a: PostData, b: PostData): number {
  if (a.frontmatter.date < b.frontmatter.date) {
    return 1
  } else {
    return -1
  }
}
