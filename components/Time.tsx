import { parseISO, format } from 'date-fns'
import { dateFormat } from 'blog.config'

export default function Time({ dateString }: { dateString: string }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, dateFormat)}</time>
}
