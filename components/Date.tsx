import Time from './Time'

export default function Date({ dateString }: { dateString: string }) {
  return (
    <div className="text-gray-500 text-sm lg:text-xl">
      <Time dateString={dateString} />
    </div>
  )
}
