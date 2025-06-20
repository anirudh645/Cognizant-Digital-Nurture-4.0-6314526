package designpatterns.factorymethod_pattern_example;

public class PdfDocumentFactory extends DocumentFactory{
    @Override
    public Document createDocument(){
        return new PdfDocument();
    }
}
