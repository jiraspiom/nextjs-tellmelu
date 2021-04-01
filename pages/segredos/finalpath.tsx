import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"



function SegredoIndex({ segredos }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<ul>
			{segredos.map((segred) => (
				<li key={segred._id}>{segred.segredo}</li>
			))}
		</ul>
	)
}

export default SegredoIndex

  
  export async function getStaticPaths() {

	const res = await fetch(`${process.env.HOST}/api/segredos`)
	const posts = await res.json()

	const paths = posts.map((post) => ({
	  params: { _id: post._id },
	}))

	return { paths, fallback: true }
  }
  
  // This also gets called at build time
  export async function getStaticProps( context ) {

	console.log(context)
	
	// If the route is like /posts/1, then params.id is 1
	const res = await fetch(`${process.env.HOST}/api/segredos`)
	const segredos = await res.json()
  
	// Pass post data to the page via props
	return { props: { segredos } }
  }
  