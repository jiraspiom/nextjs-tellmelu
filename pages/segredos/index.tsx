import Link from 'next/link'
import dbConnect from '../../utils/dbConnect'
import Segredo from '../../models/Segredo'

const Index = ({ segredos }) => (
  <>
    {/* Create a card for each pet */}

    {/* botao zinho de adicionar */}
    <div className="fixed-action-btn click-to-toggle">
      <a href="/" className="btn-floating btn-large green-blue"> <i className="material-icons">add</i> </a>
    </div>

    <div className="row">
      <div className="col s12 m3"></div>
      <form className="col s12 m6" action="/" method="POST">
        <div className="card  blue-grey darken-2">
          <div className="card-content white-text">
            <span className="card-title"></span>
            <textarea name="segredo" id="segredo" placeholder="you need help..."
              className="materialize-textarea white-text" required ></textarea>
            <button className="btn waves-effect waves-light pulse" >tellme</button>
          </div>
        </div>
      </form>
      <div className="col s12 m3"></div>
    </div>

    {segredos.map((segredo) => (
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
  </>
)


export async function getServerSideProps() {
  await dbConnect()

  //acessando a base direto do server site props
  const result = Segredo.find({}).sort({ dataAt: -1 }).limit(88)

  const segredos = JSON.parse(JSON.stringify(result))
  return {
    props: {
      segredos: segredos
    }
  }
}

export default Index
