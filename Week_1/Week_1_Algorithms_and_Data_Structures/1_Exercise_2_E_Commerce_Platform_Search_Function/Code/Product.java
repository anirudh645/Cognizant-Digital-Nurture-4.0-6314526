
public class Product {
    
    // Attributes for Product class
    private int productId;
    private String productName;
    private String category;

    //Constructor for Product class
    public Product(int id, String name, String category){
        this.productId = id;
        this.productName = name;
        this.category = category;
    }

    // Getters and Setters for Product class
    public int getProductId() {
        return productId;
    }
    public void setProductId(int productId) {
        this.productId = productId;
    }
    public String getProductName() {
        return productName;
    }
    public void setProductName(String productName) {
        this.productName = productName;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
}