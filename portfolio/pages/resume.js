import { motion } from 'framer-motion'
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";



export default function Resume() {
  return (
    <motion.div exit={{ y: "-100%" }} initial={{ y: "-100%" }} animate={{ y: 0 }} transition={{ duration: .3 }}>
      <Navbar></Navbar>
      <div>
        <h1>Resume</h1>
      </div>
      <Footer></Footer>
    </motion.div>
  )
}