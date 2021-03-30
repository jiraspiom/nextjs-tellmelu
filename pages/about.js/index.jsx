function About({ segredos }) {
  return (
    <div>
      <ul>
        {segredos}
      </ul>
    </div>

  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  // const res = await fetch('http://localhost:3000/api/segredos').then((res)=> {
  //     console.log("tudo ok")
  // }).catch(erro =>{
  //     console.log("erroou")
  // })
  // const segredos = await res.json()


  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      segredos: "...segredo...",
    },
  }
}

export default About