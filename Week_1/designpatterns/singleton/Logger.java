package designpatterns.singleton;

public class Logger {

    private static Logger instance;

    //private constructor
    private Logger(){    
    }

    //public method to get the instance of the Logger class
    public static synchronized Logger getLoggerInstance(){
        //using ternary operator to check if a instance for Logger already exists
        return instance == null ? instance = new Logger() : instance ;
    }
}