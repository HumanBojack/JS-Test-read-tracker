import React from 'react';
import Books from '../../db/books.json';
import BookCard from '../BookCard';
import CardColumns from 'react-bootstrap/CardColumns';
let page = 9;

const BookList = () => {
	let books = Books.books[0];
	const [value, setValue] = React.useState("");
	const [searchResults, setSearchResults] = React.useState(books.slice(0,page));

	const onButtonClick = (event) => {
		event.preventDefault();
		page += 9;
		setSearchResults(books.slice(0,page))
	}

	const onChangeValue = (event) => {
		setValue(event.target.value);
	}

	const search = () => {
		 setSearchResults(books.filter(book => book.title.toLowerCase().includes(value.toLowerCase())));
	}

	const showFavorites = () => {
		setSearchResults(books.filter(book => book.isFav == true))
	}

	const showRead = () => {
		setSearchResults(books.filter(book => book.read == true))
	}


	return (
		<div>
			<div>
				<input type='text' onChange={(event) => onChangeValue(event)} value={value}></input>
				<input type="submit" value="Search" onClick={search}></input>
				<input type="submit" value="Show favorites" onClick={showFavorites}></input>
				<input type="submit" value="Show read" onClick={showRead}></input>
			</div>

			<CardColumns>
				{searchResults.map(book => {
					return <BookCard book={book} key={book.isbn} />
				})}
			</CardColumns>
			<a href="" onClick={(event) => onButtonClick(event)}>Load more</a>
		</div>
	)
}

export default BookList;