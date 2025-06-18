package designpatterns.factorymethod_pattern_example;

public class PdfDocument implements Document {
    @Override
    public void open(){
        System.out.println("Opening Pdf Document");
    }
}
