import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons'

export default function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap items-center justify-start">
      <FontAwesomeIcon icon={faTags} className="text-gray-500 mr-1" />
      {tags.map((tag) => (
        <li key={tag}>
          <Link href={`/tags/${tag}`}>
            <a className="m-1 px-2 bg-gray-200 hover:bg-gray-300 rounded-sm inline-block text-black hover:text-black">
              {tag}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
