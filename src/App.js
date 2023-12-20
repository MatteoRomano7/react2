import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNav from "./component/MyNav"
import Welcome from "./component/Welcome"
import Container from "react-bootstrap/Container"
import Books from "./component/Books"
import MyFooter from "./component/MyFooter"

function App() {
  return (
    <div id="pageContainer">
      <div>
        <MyNav />
        </div>
      <div>
        <Container>
          <Welcome />
          <Books />
        </Container>
      </div>
      <div>
        <MyFooter />
      </div>
    </div>
  )
}

export default App
