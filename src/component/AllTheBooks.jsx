import { Col, Row } from "react-bootstrap"
import SingleBook from "./SingleBook"
import romance from "../data/romance.json"
import { useState } from "react"

const AllTheBooks = () => {
  const [selectedBook, setSelectedBook] = useState(null)

  // Funzione per cambiare il libro selezionato
  const changeSelectedBook = (asin) => {
    setSelectedBook(asin)
  }

  return (
    <Row className="g-2">
      {romance.map((book) => (
        <Col xs={12} md={3} key={book.asin}>
          <SingleBook
            book={book}
            selectedBook={selectedBook}
            changeSelectedBook={changeSelectedBook}
          />
        </Col>
      ))}
    </Row>
  )
}

export default AllTheBooks
