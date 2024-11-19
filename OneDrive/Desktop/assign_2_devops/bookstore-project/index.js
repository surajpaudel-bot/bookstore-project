        "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./src/Book");
const Customer_1 = require("./src/Customer");
const Bookstore_1 = require("./src/Bookstore");
// Create an instance of the bookstore
const bookstore = new Bookstore_1.Bookstore();
// Create sample books
const book1 = new Book_1.Book(1, 'The Great Gatsby', 'F. Scott Fitzgerald', true);
const book2 = new Book_1.Book(2, '1984', 'George Orwell', true);
const book3 = new Book_1.Book(3, 'To Kill a Mockingbird', 'Harper Lee', true);
// Add books to the bookstore
bookstore.addBook(book1);
bookstore.addBook(book2);
bookstore.addBook(book3);
// Create sample customers
const customer1 = new Customer_1.Customer(1, 'Alice');
const customer2 = new Customer_1.Customer(2, 'Bob');
// Add customers to the bookstore
bookstore.addCustomer(customer1);
bookstore.addCustomer(customer2);
// Demonstrate borrowing a book
console.log(bookstore.borrowBook(1, 1)); // Alice borrows "The Great Gatsby"
console.log(bookstore.borrowBook(2, 1)); // Bob tries to borrow "The Great Gatsby" (should fail)
// Demonstrate returning a book
console.log(bookstore.returnBook(1, 1)); // Alice returns "The Great Gatsby"
console.log(bookstore.borrowBook(2, 1)); // Bob borrows "The Great Gatsby" after it's returned
// Show current state of the customers' borrowed books
console.log('Alice borrowed books:', customer1.borrowedBooks);
console.log('Bob borrowed books:', customer2.borrowedBooks);
