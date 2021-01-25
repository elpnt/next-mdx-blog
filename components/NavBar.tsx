import Link from 'next/link'
import NavListItem from './NavListItem'
import config from 'blog.config'

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-gray-900 p-4 mb-10">
      <Link href="/">
        <a className="text-white hover:text-gray-200 text-2xl md:text-3xl lg:text-4xl font-bold">
          {config.title}
        </a>
      </Link>
      <ul className="flex flex-row">
        <li>
          <NavListItem href="/">Posts</NavListItem>
        </li>
        <li>
          <NavListItem href="/tags">Tags</NavListItem>
        </li>
        <li>
          <NavListItem href="/about">About</NavListItem>
        </li>
      </ul>
    </nav>
  )
}
