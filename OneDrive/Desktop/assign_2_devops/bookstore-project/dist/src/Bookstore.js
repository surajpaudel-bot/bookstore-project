"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bookstore = void 0;
class Bookstore {
    constructor() {
        this.books = [];
        this.customers = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    addCustomer(customer) {
        this.customers.push(customer);
    }
    findBookById(id) {
        return this.books.find(book => book.id === id);
    }
    findCustomerById(id) {
        return this.customers.find(customer => customer.id === id);
    }
    borrowBook(customerId, bookId) {
        const customer = this.findCustomerById(customerId);
        const book = this.findBookById(bookId);
        if (customer && book && book.available) {
            customer.borrowBook(bookId);
            book.toggleAvailability();
            return `${customer.name} successfully borrowed "${book.title}".`;
        }
        else {
            return `Borrowing failed. Either the book is not available or customer/book does not exist.`;
        }
    }
    returnBook(customerId, bookId) {
        const customer = this.findCustomerById(customerId);
        const book = this.findBookById(bookId);
        if (customer && book && customer.borrowedBooks.includes(bookId)) {
            customer.returnBook(bookId);
            book.toggleAvailability();
            return `${customer.name} successfully returned "${book.title}".`;
        }
        else {
            return `Return failed. Either the book was not borrowed by the customer or customer/book does not exist.`;
        }
    }
}
exports.Bookstore = Bookstore;
