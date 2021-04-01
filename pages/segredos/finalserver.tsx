import { GetStaticProps, GetServerSideProps, GetStaticPaths, InferGetServerSidePropsType } from "next"


function SegredoIndex({ segredos }: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<ul>
			{segredos.map((segred) => (
				<li key={segred._id}>{segred.segredo}</li>
			))}
		</ul>
	)
}

export default SegredoIndex

// This also gets called at build time
export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch(`${process.env.HOST}/api/segredos`)
	const segredos = await res.json()

	// Pass post data to the page via props
	return { props: { segredos } }
}
