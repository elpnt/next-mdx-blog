import Link from 'next/link'
import { GetStaticProps } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons'
import Container from 'components/Container'
import { getAllTags, getSortedPostsDataByTag } from 'lib/tags'

type Props = {
  tag: string
  numberOfPosts: number
}[]

export default function TagsList({ tagsData }: { tagsData: Props }) {
  return (
    <Container>
      <h1 className="text-4xl font-bold mb-5">Tags</h1>
      <ul className="prose prose-xl">
        {tagsData.map(({ tag, numberOfPosts }) => (
          <li key={tag}>
            <Link href={`/tags/${tag}`}>
              <a>
                <FontAwesomeIcon icon={faTags} className="mr-1" />
                {tag}({numberOfPosts})
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  /*
   * returns an object like below
   * {
   *   props: {
   *     tagsData: [
   *        { tag: "Markdown", numberOfPosts: 5 },
   *        { tag: "Math",     numberOfPosts: 2 },
   *        ...
   *     ]
   *   }
   * }
   */
  const tags = await getAllTags()
  const tagsData = await Promise.all(
    tags.map(async (tag) => {
      const posts = await getSortedPostsDataByTag(tag)
      return {
        tag,
        numberOfPosts: posts.length,
      }
    })
  )
  return {
    props: {
      tagsData,
    },
  }
}
