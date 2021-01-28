import Link from 'next/link'
import { TagsFilled } from '@ant-design/icons'

export default function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap items-center justify-start my-2">
      <TagsFilled />
      {tags.map((tag) => (
        <li key={tag}>
          <Link href={`/tags/${tag}`}>
            <a className="m-1 p-1 text-xs md:text-sm bg-gray-200 hover:bg-gray-300 rounded-sm inline-block text-black hover:text-black">
              {tag}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
