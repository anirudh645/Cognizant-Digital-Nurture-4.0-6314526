package designpatterns.singleton;

public class Test {
    public static void main(String args[]) {
        //Creating instances of Logger class
        Logger log1 = Logger.getLoggerInstance();
        Logger log2 = Logger.getLoggerInstance();

        //Verifying the singleton implementation
        System.out.println((log1 == log2)? "Same instance" : "Different instances" );
    }
}
