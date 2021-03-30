import React from 'react'
import Head from 'next/head'

function About({ segredos }) {
  return (
    <div>
    <Head>
      <title>About</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* <Nav /> */}

    <div>
      <h1>Macro Compliance Tracker!</h1>
      <p>
        This app will help you ensure your macros are within a selected range to help you achieve your New Years Resolution!
      </p>
    </div>
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