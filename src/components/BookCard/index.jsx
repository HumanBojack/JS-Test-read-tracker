import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const BookCard = ({book}) => {
	const [isFavorite, setIsFavorite] = React.useState(book.isFav);
	const [isRead, setIsRead] = React.useState(book.read);

	const favorite = () => {
		book.isFav = !book.isFav;
		setIsFavorite(!isFavorite);
	}

	const read = () => {
		book.read = !book.read;
		setIsRead(!isRead);
	}

	return (
		<Card>
		  <Card.Img variant="top" src={book.thumbnailUrl} />
		  <Card.Body>
		    <Card.Title>{book.title}</Card.Title>
		    <Card.Text>
		      {book.longDescription}
		    </Card.Text>
		    {book.authors.join(", ")}
		    <Button variant="primary" onClick={favorite}>{isFavorite ? "Remove from" : "Add to"} favorites</Button>
		    <Button variant="primary" onClick={read}>{isRead ? "Mark as not" : "Mark as"} read</Button>
		  </Card.Body>
		</Card>
	)
}

export default BookCard;