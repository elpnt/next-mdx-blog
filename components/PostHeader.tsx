import Image from 'next/image'
import Date from 'components/Date'
import Tags from 'components/Tags'
import { PostData } from 'types'

type Props = {
  postData: PostData
}

export default function PostHeader({ postData }: Props) {
  const { title, date, tags, image } = postData.frontmatter
  console.log(image)
  return (
    <header className="mb-10 w-full">
      <Date dateString={date} />
      <h1 className="text-3xl md:text-5xl font-bold my-1 md:my-2">{title}</h1>
      <Tags tags={tags} />
      {image ? (
        <Image
          src={`/images/${image}`}
          width={1200}
          height={600}
          layout="responsive"
          objectFit="cover"
        />
      ) : null}
    </header>
  )
}
