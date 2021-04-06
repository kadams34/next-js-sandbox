import { motion } from 'framer-motion'
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";



export default function Contact() {
  return (
    <motion.div exit={{ x: "100%" }} initial={{ x: "100%" }} animate={{ x: 0 }} transition={{ duration: .3 }}>
      <Navbar></Navbar>
      <div>
        <h1>Contact</h1>
      </div>
      <Footer></Footer>
    </motion.div>
  )
}