import { Book } from './Book';
import { Customer } from './Customer';

export class Bookstore {
    private books: Book[] = [];
    private customers: Customer[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    addCustomer(customer: Customer): void {
        this.customers.push(customer);
    }

    findBookById(id: number): Book | undefined {
        return this.books.find(book => book.id === id);
    }

    findCustomerById(id: number): Customer | undefined {
        return this.customers.find(customer => customer.id === id);
    }

    borrowBook(customerId: number, bookId: number): string {
        const customer = this.findCustomerById(customerId);
        const book = this.findBookById(bookId);

        if (customer && book && book.available) {
            customer.borrowBook(bookId);
            book.toggleAvailability();
            return `${customer.name} successfully borrowed "${book.title}".`;
        } else {
            return `Borrowing failed. Either the book is not available or customer/book does not exist.`;
        }
    }

    returnBook(customerId: number, bookId: number): string {
        const customer = this.findCustomerById(customerId);
        const book = this.findBookById(bookId);

        if (customer && book && customer.borrowedBooks.includes(bookId)) {
            customer.returnBook(bookId);
            book.toggleAvailability();
            return `${customer.name} successfully returned "${book.title}".`;
        } else {
            return `Return failed. Either the book was not borrowed by the customer or customer/book does not exist.`;
        }
    }
}
