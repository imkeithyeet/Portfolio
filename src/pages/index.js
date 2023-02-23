import Main from '../../components/Main';
import Head from 'next/head'
// import Image from 'next/image'
import Navbar from '../../components/Navbar'
import About from '../../components/About'
import Skills from 'components/Skills';
import Projects from 'components/Projects';


export default function Home() {
  return (
    <>
      <Head>
        <title>Keith | Full Stack Developer </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Main />
      <About/>
      <Skills/>
      <Projects/>
    </>
  )
}
