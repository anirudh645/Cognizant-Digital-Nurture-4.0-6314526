package designpatterns.factorymethod_pattern_example;

public class ExcelDocument implements Document {
    @Override
    public void open(){
        System.out.println("Opening Excel Document");
    }
}
