import { GetStaticProps, InferGetStaticPropsType } from "next"

export const getStaticProps: GetStaticProps = async () => {
	type Segredo ={
		_id: string,
		segredo: string,
		cor: string,
	}

  const res = await fetch('http://localhost:3000/api/segredos')
  const segredos: Segredo[] = await res.json()

  return {
    props: {
      segredos,
    },
		revalidate: 1
  }
}

// posts will be populated at build time by getStaticProps()
function Blog({ segredos }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ul>
      {segredos.map((segredo) => (
        <li key={segredo._id}>{segredo.segredo}</li>
      ))}
    </ul>
  )
}

export default Blog