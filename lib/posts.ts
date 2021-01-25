import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { format } from 'date-fns'
import renderToString from 'next-mdx-remote/render-to-string'
import { dateFormat } from 'blog.config'

const postsDirectory = path.join(process.cwd() + '/posts')

export function getAllPosts() {
  return fs.readdirSync(postsDirectory)
}

export async function getPostDataBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)
  const { title, date, tags } = data
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
    },
    mdxSource,
  }
}

export async function getSortedPostsData() {
  const posts = await Promise.all(
    getAllPosts().map(async (post) => {
      const slug = post.replace(/\.mdx$/, '')
      return await getPostDataBySlug(slug)
    })
  )
  return posts.sort((a, b) => {
    if (a.frontmatter.date < b.frontmatter.date) {
      return 1
    } else {
      return -1
    }
  })
}
