"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(id, title, author, available) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.available = available;
    }
    toggleAvailability() {
        this.available = !this.available;
    }
}
exports.Book = Book;
