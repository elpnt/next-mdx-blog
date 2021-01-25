import PostCard from 'components/PostCard'
import { PostData } from 'types'

export default function PostsList({ postsData }: { postsData: PostData[] }) {
  return (
    <ul>
      {postsData.map((post) => (
        <li key={post.slug}>
          <PostCard postData={post} />
        </li>
      ))}
    </ul>
  )
}
