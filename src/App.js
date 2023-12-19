import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNav from "./component/MyNav"
import MyFooter from "./component/MyFooter"
import Welcome from "./component/Welcome"
import Books from "./component/Books"
import { Container } from "react-bootstrap"

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <Books />
      </Container>
      <MyFooter />
    </>
  )
}

export default App
