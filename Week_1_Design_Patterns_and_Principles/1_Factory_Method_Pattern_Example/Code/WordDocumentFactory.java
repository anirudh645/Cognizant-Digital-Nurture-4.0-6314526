package designpatterns.factorymethod_pattern_example;

public class WordDocumentFactory extends DocumentFactory{
    @Override
    public Document createDocument(){
        return new WordDocument();
    }
}