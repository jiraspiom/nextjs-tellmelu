import { useAxios } from '@/hooks/axios';
import api from '@/services/api';
import setCor from '@/services/cor';
import Link from 'next/link'
import React, { useState } from 'react';

interface ISegredo {
  _id: string,
  segredo: string,
  cor: string
}

const Index = ({initialData}) => {
  //descontruo a arrai data e dou o nome dele de segredos
  const { data: segredos, mutate } = useAxios<ISegredo[]>('/api/segredos', initialData );
  interface ISegredoState {
    segredo: string,
    cor: string,
    dataAt: any
  }

  const [model, setModel] = useState<ISegredoState>({
    segredo: '',
    cor: '',
    dataAt: ''
  })

  const handleChange = (event) => {
    event.preventDefault();
    const target = event.target

    setModel({
      ...model,
      [target.name]: target.value,
    })
  }

  const handleSubmit = () => {
    model.dataAt = Date.now()
    model.cor = setCor()

    api.post('/api/segredos', model).then(res => {
      console.log('salvou...', Date.now())
    }).catch(error => {
      console.log('erro ao salvar registro: ', error)
    })

    model.segredo = ''
    model.cor = ''
    model.dataAt = ''

    mutate()

  }
  return (
    <>
      <div className="row">
        <div className="col s12 m3"></div>
        <div className="col s12 m6">
          <div className="card  blue-grey darken-2">
            <div className="card-content white-text">
              <span className="card-title"></span>

              <textarea value={model.segredo} onChange={handleChange}
                name="segredo" id="segredo" placeholder="you need help..."
                className="materialize-textarea white-text" required >
              </textarea>
              <button onClick={handleSubmit}
                className="btn waves-effect waves-light right pulse" >tellme
							</button>

            </div>
          </div>
        </div>
        <div className="col s12 m3"></div>
      </div>

      {segredos?.map((item) => (
        <div className="card" key={item._id}>
          <div className="col s12 m3"></div>
          <div className="col s12 m6">

            <div className={`card ${item.cor}`}>
              <div className={"card-content white-text"}>
                <span className="card-title"></span>
                <p >{item.segredo} </p>
              </div>
              <div className="card-action" >
                <Link href="/" >good </Link>
              </div>
            </div>
          </div>
          <div className="col s12 m3"></div>
        </div>
      ))}
    </>
  )
}

export default Index


export async function getServerSideProps() {
  const res = await fetch(`${process.env.HOST}/api/segredos`)
	
  const segredos = await res.json()

  return { props: { initialData: segredos } }
}