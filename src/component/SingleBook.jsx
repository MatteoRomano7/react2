import { Card } from "react-bootstrap"

const SingleBook = ({ changeSelectedBook, selectedBook, book }) => {
  return (
    <>
      <Card
        className="book-cover d-flex flex-column myCards"
        onClick={() => changeSelectedBook(book.asin)}
        style={{
          border: selectedBook === book.asin ? "3px solid red" : "none",
        }}
        data-testid="book-card"
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>
            <h4>{book.title}</h4>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleBook
