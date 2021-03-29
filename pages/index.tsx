import AdicionarSegredo from '@/components/adicionarSegredo';
import { useFetch } from '@/hooks/fetch';
import Link from 'next/link';
import React from 'react';


interface ISegredo {
    _id: string,
    segredo: string,
    cor: string
}

function Segredos(segredos) {

    const  {data}  = useFetch<ISegredo[]>('/api/segredos');

    return (
        <div>
            {/* cabeçalho para adiconar segredo */}
            <AdicionarSegredo/>

            {data?.map((segredo) => (
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

export async function getStaticProps() {
    // const response = useFetch<ISegredo[]>('/api/segredos');
    // const segredos = response.data;

    return {
        props: {
            segredos: 'Home',
        }
    };
}