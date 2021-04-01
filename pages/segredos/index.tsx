import AdicionarSegredo from '@/components/adicionarSegredo';
import { useAxios } from '@/hooks/axios';
import { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import React from 'react';


interface ISegredo {
	_id: string,
	segredo: string,
	cor: string
}


function Segredos({ segredos }: InferGetServerSidePropsType<typeof getServerSideProps>) {

	const { data } = useAxios<ISegredo[]>('/api/segredos', segredos);

	return (
		<div>

			{/* <NavBar /> */}

			<AdicionarSegredo />

			{segredos?.map((segredo) => (
				<div className="row" key={segredo._id}>
					<div className="col s12 m3"></div>
					<div className="col s12 m6">

						<div className={`card ${segredo.cor}`}>
							<div className={"card-content white-text"}>
								<span className="card-title"></span>
								<p >{segredo.segredo} </p>
							</div>
							<div className="card-action" >
								<Link href="/" >good </Link>
							</div>

						</div>
					</div>
					<div className="col s12 m3"></div>
				</div>
			))}
		</div>
	)
}
export default Segredos

export const getServerSideProps: GetServerSideProps = async () => {
	type Segredo = {
		_id: string,
		segredo: string,
		cor: string,
	}

	const res = await fetch(`${process.env.HOST}/api/segredos`)
	const segredos: Segredo[] = await res.json()

	return {
		props: {
			segredos,
		}
	}
}
