package designpatterns.factorymethod_pattern_example;

public class WordDocument implements Document {
    @Override
    public void open(){
        System.out.println("Opening Word Document");
    }
}
