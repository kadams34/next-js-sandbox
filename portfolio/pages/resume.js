import Head from 'next/head'
import  styled from 'styled-components'
import { motion } from 'framer-motion'
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";

const Hero = styled.div`
  height: 90vh;
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

export default function Resume() {
  return (
    <motion.div exit={{ y: "-100%" }} initial={{ y: "-100%" }} animate={{ y: 0 }}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar></Navbar>
      <Hero>
        <Heading>Resume</Heading>
      </Hero>
      <Footer></Footer>
    </motion.div>
  )
}