import React from 'react';
import ReactDOM from 'react-dom';
import BookList from './components/BookList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
	<div>
		<BookList />
	</div>
)

ReactDOM.render(<App />, document.getElementById('root'));