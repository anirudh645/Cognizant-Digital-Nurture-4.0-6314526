package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


public class Main {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        System.out.println("Spring Application Started!");
        BookService bookService = (BookService) context.getBean("bookService");
        System.out.println(bookService.getBook(1));
    }
}