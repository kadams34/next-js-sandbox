import { motion } from 'framer-motion'
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import { Container, Row, Col } from 'react-bootstrap'




export default function Home() {
  return (
    <>
    <motion.div exit={{ scale: 0 }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: .4 }}>
      <Navbar></Navbar>
      <div>
        <Container>
          <Row>
            <Col>
              <h1 className="display-1">KEVIN ADAMS</h1>
              <h1 className="display-3">Full Stack Web Developer</h1>
              <h1 className="display-4">ABQ, NM</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </motion.div>
    </>
  )
}
