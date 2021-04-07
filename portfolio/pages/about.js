import { motion } from 'framer-motion'
import Footer from '../components/Footer';
import Header from "../components/Header";



export default function About() {
  return (
    <motion.div exit={{ x: "-100%" }} initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ duration: .4 }}>
      <Header></Header>
      <div>
        <h1>About</h1>
      </div>
      <Footer></Footer>
    </motion.div>
  )
}
