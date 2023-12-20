import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNav from "./component/MyNav"
import Welcome from "./component/Welcome"
import SingleBook from "./component/SingleBook"
import Container from "react-bootstrap/Container"
import AllTheBooks from "./component/AllTheBooks"
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
          <AllTheBooks />
        </Container>
      </div>
      <div>
        <MyFooter />
      </div>
    </div>
  )
}

export default App
