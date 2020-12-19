import Book from './book.component';

const books = ["Book1", "Book2", "Book3", "Book4", "Book5"];

function BookList(){
    return(
    <div className="container">
        <div class="row row-cols-4">
        {
        books.map(book => (
        <Book></Book>
        ))}
        </div>
    </div>
    )
}

export default BookList;