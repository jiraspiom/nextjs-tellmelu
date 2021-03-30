
function About({ data }) {

  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      {/* <Nav /> */}

      <div className="container mx-auto text-center">
        <h1 className="text-6xl m-12">Macro Compliance Tracker!</h1>
        <p className="text-xl">
          This app will help you ensure your macros are within a selected range to help you achieve your New Years Resolution!
      </p>
      </div>

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
           
                            </div>

                        </div>
                    </div>
                    <div className="col s12 m3"></div>
                </div>
            ))}

    </div>

  )
}

// This function gets called at build time
// export async function getStaticProps() {
// Call an external API endpoint to get posts
// const res = await fetch('http://localhost:3000/api/segredos').then((res)=> {
//     console.log("tudo ok")
// }).catch(erro =>{
//     console.log("erroou")
// })
// const segredos = await res.json()


// By returning { props: { posts } }, the Blog component
// will receive `posts` as a prop at build time
//   return {
//     props: {
//       segredos: "...segredo...",
//     },
//   }
// }

export default About

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:3000/api/segredos");
//   const json = await res.json();

//   // const  {data}  = useFechSimples<ISegredo[]>('/api/segredos');



//   return {
//     props: {
//       data: json
//     },
//   };
// }