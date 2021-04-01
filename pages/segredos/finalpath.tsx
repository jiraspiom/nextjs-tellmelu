import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async ()=> {
	type Segredo = {
		_id: string,
		segredo: string,
		cor: string,
	}
	// Call an external API endpoint to get posts
	const res = await fetch('http://localhost:3000/api/segredos')
	const segredos: Segredo[] = await res.json()

	// Get the paths we want to pre-render based on posts
	const paths = segredos.map((segredo) => ({
		params: { id: segredo._id },
	}))

	return {
		paths,
		fallback: false
	}
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
	type Segredo = {
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
		// revalidate: 1
	}
}

// posts will be populated at build time by getStaticProps()
function SegredoIndex({ segredos }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<ul>
			{segredos.map((segredo) => (
				<li key={segredo._id}>{segredo.segredo}</li>
			))}
		</ul>
	)
}

export default SegredoIndex