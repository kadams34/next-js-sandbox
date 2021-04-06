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

export default function About() {
  return (
    <motion.div exit={{ x: "-100%" }} initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ duration: .4 }}>
      <Navbar></Navbar>
      <Hero>
        <Heading>About</Heading>
      </Hero>
      <Footer></Footer>
    </motion.div>
  )
}
