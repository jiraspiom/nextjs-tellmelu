import { useRouter } from 'next/router'

export default function SegredoLike() {
  const router = useRouter()

  return <span onClick={() => router.reload()}>Click here to go back</span>
}
