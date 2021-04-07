import { motion } from 'framer-motion'
import Footer from '../components/Footer';
import Header from "../components/Header";



export default function Portfolio() {
  return (
    <motion.div exit={{ y: "100%" }} initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: .4 }}>
      <Header></Header>
      <div>
        <h1>Portfolio</h1>
      </div>
      <Footer></Footer>
    </motion.div>
  )
}