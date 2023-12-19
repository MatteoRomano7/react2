import { Card, Col, Row } from "react-bootstrap"
import romance from "../data/romance.json"

const Books = () => {
  return (
    <Row className="g-2">
      {romance.map((book) => {
        return (
          <Col xs={12} md={3} key={book.asin}>
            <Card className="book-cover d-flex flex-column text-center myCards">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title><h4>{book.title}</h4></Card.Title>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}
export default Books
