import { Book } from '../Book';
import { Customer } from '../Customer';
import { Bookstore } from '../Bookstore';

describe('Bookstore - Borrow Book', () => {
  it('should allow a customer to borrow a book if available', () => {
    const bookstore = new Bookstore();
    const book = new Book(1, '1984', 'George Orwell', true);
    const customer = new Customer(1, 'Alice');
    
    bookstore.addBook(book);
    bookstore.addCustomer(customer);
    
    const result = bookstore.borrowBook(1, 1);
    expect(result).toBe('Alice successfully borrowed "1984".');
    expect(book.available).toBe(false);
    expect(customer.borrowedBooks).toContain(1);
  });
});
