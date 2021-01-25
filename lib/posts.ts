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

export async function getPostsDataBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)
  const mdxSource = await renderToString(content, {
    mdxOptions: {
      remarkPlugins: [require('remark-math')],
      rehypePlugins: [require('rehype-katex'), require('@mapbox/rehype-prism')],
    },
  })

  return {
    frontmatter: {
      title: data.title,
      date: format(data.date, dateFormat),
      tags: data.tags,
    },
    mdxSource,
  }
}
