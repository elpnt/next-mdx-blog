import { getAllPostsData, getSortedPostsData } from './posts'
import { sortDescDate } from './utils'

export async function getAllTags(): Promise<string[]> {
  let tagSet: Set<string> = new Set()
  const allPostsData = await getAllPostsData()
  allPostsData.forEach((post) => {
    post.frontmatter.tags.forEach((tag) => {
      tagSet.add(tag)
    })
  })
  return Array.from(tagSet)
}

export async function getSortedPostsDataByTag(tag: string) {
  const allPostsData = await getAllPostsData()
  const posts = allPostsData.filter((post) =>
    post.frontmatter.tags.includes(tag)
  )
  return posts.sort((a, b) => sortDescDate(a, b))
}
