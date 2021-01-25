import Container from 'components/Container'
import { FrontMatter } from 'types'

type Props = {
  frontmatter: FrontMatter
  children: React.ReactNode
}

export default function PostLayout({ frontmatter, children }: Props) {
  return (
    <Container>
      <article className="flex flex-col justify-between items-sart">
        <div className="prose lg:prose-xl max-w-none w-full">{children}</div>
      </article>
    </Container>
  )
}
