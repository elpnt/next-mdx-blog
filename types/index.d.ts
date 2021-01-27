import { MdxRemote } from 'next-mdx-remote/types'

export interface FrontMatter {
  title: string
  date: string
  tags: string[]
  image: string
}

export interface PostData {
  slug: string
  frontmatter: FrontMatter
  mdxSource: MdxRemote.Source
}
