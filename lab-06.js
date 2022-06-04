class Book {
    constructor(title, author, pubDate, isbn) {
      this.title = title;
      this.author = author;
      this.pubDate = pubDate;
      this.isbn = isbn
    }
  }

class Library {
    constructor(name) {
      this._name = name;
      this._books = [];
    }
    get books() {
      // Return copy of books
      return JSON.parse(JSON.stringify(this._books));
    }
    get count() {
      return this._books.length;
    }
    addBook(book = {}) {
      const { title = "", author = "", pubDate = "" } = book;
      if (title.length > 0 && author.length > 0) {
        const newBook = { title, author, pubDate };
        this._books.push(newBook);
      }
    }
    listBooks() {
      for (const book of this._books) {
        const {title, author, pubDate, isbn} = book;
        console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`)
      }
    }
    deleteBook(isbn) {
        const deleteBook = isbn
        this._books.slice(deleteBook)
        
        //let deletedBook = isbn.filter(function(value, index, arr) {
        //    return value ==! isbn
        // })

    }
  }

// Create library object
const library = new Library("New York Times Best Seller List");

// Create books
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "0735211299");
const theHillWeClimb = new Book("The Hill We Climb", "David Baldacci", "03/30/2021", "059346527X");
const oceanPrey = new Book("Atomic Habits", "John Sandford", "04/13/2021", "1398505501");
const heirToTheEmpire = new Book("Heir to the Empire", "Timmothy Zahn", "05/01/1991", "9780553073270")
const darkForceRising = new Book("Dark Force Rising", "Timmothy Zahn", "05/01/1992", "9780553085747")
const theLastCommand = new Book("The Last Command", "Timmothy Zahn", "04/01/1993", "9780553091861")

// Add books to library and output library count and books
library.addBook(atomicHabits);
library.addBook(theHillWeClimb);
library.addBook(oceanPrey);
library.addBook(heirToTheEmpire)
library.addBook(darkForceRising)
library.addBook(theLastCommand)
console.log(`Book count: ${library.count}`);
library.listBooks();

// Delete a book and output library books
console.log("* Library after delete *");
library.deleteBook("059346527X");
library.listBooks();