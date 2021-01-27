import Time from './Time'

export default function Date({ dateString }: { dateString: string }) {
  return (
    <div className="text-gray-500 text-sm md:text-base">
      <Time dateString={dateString} />
    </div>
  )
}
