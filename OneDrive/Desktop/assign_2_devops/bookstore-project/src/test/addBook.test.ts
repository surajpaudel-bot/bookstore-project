import { Book } from '../Book';
import { Bookstore } from '../Bookstore';

describe('Bookstore - Add Book', () => {
  it('should add a book to the bookstore', () => {
    const bookstore = new Bookstore();
    const book = new Book(1, 'The Great Gatsby', 'F. Scott Fitzgerald', true);
    
    bookstore.addBook(book);
    
    expect(bookstore.findBookById(1)).toEqual(book);
  });
});
