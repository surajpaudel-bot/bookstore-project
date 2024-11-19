import { Book } from '../Book';
import { Customer } from '../Customer';
import { Bookstore } from '../Bookstore';

describe('Bookstore - Return Book', () => {
  it('should allow a customer to return a borrowed book', () => {
    const bookstore = new Bookstore();
    const book = new Book(1, 'To Kill a Mockingbird', 'Harper Lee', true);
    const customer = new Customer(1, 'Bob');

    bookstore.addBook(book);
    bookstore.addCustomer(customer);
    bookstore.borrowBook(1, 1);
    
    const result = bookstore.returnBook(1, 1);
    expect(result).toBe('Bob successfully returned "To Kill a Mockingbird".');
    expect(book.available).toBe(true);
    expect(customer.borrowedBooks).not.toContain(1);
  });
});
