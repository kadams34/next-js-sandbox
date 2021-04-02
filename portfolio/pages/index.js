import Head from 'next/head'
import  styled from 'styled-components'
import { motion } from 'framer-motion'
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";

const Hero = styled.div`
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff
`

const Heading = styled.h1`
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`

export default function Home() {
  return (
    <>
    <motion.div exit={{ scale: 0 }} initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar></Navbar>
      <Hero>
          <Heading>KEVIN ADAMS</Heading>
      </Hero>
      <Footer></Footer>
    </motion.div>
    </>
  )
}
