"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(id, name, borrowedBooks = [] // Array of Book IDs
    ) {
        this.id = id;
        this.name = name;
        this.borrowedBooks = borrowedBooks;
    }
    borrowBook(bookId) {
        this.borrowedBooks.push(bookId);
    }
    returnBook(bookId) {
        this.borrowedBooks = this.borrowedBooks.filter(id => id !== bookId);
    }
}
exports.Customer = Customer;
