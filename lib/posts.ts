import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { format } from 'date-fns'
import renderToString from 'next-mdx-remote/render-to-string'

import { sortDescDate } from './utils'
import { dateFormat } from 'blog.config'
import { PostData } from 'types'

const postsDirectory = path.join(process.cwd() + '/posts')

export function getAllPosts() {
  return fs.readdirSync(postsDirectory)
}

export async function getPostDataBySlug(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)
  const { title, date, tags, image } = data
  const mdxSource = await renderToString(content, {
    mdxOptions: {
      remarkPlugins: [require('remark-math')],
      rehypePlugins: [require('rehype-katex'), require('@mapbox/rehype-prism')],
    },
  })

  return {
    slug,
    frontmatter: {
      title,
      date: format(date, dateFormat),
      tags,
      image: image || null,
    },
    mdxSource,
  }
}

export async function getSortedPostsData(): Promise<PostData[]> {
  const posts = await getAllPostsData()
  return posts.sort((a, b) => sortDescDate(a, b))
}

export async function getAllPostsData(): Promise<PostData[]> {
  const posts = await Promise.all(
    getAllPosts().map(async (post) => {
      const slug = post.replace(/\.mdx$/, '')
      return await getPostDataBySlug(slug)
    })
  )
  return posts
}
