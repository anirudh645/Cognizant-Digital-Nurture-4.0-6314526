package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    public void findBook(String bookName) {
        // Logic to find the book
        System.out.println("Searching for book: " + bookName);
        bookRepository.findBook(bookName);
    }
}
