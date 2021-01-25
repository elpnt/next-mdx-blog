import Link from 'next/link'

export default function NavListItem({
  href,
  children,
}: {
  href: string
  children: React.ReactChild
}) {
  return (
    <Link href={`${href}`}>
      <a className="p-2 text-white hover:text-gray-200 text-lg lg:text-xl">
        {children}
      </a>
    </Link>
  )
}
