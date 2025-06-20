

import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class Test {
    public static void linearSearch(Product[] products, String productName) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].getProductName().equalsIgnoreCase(productName)) {
                System.out.println("Name: "+products[i].getProductName()+"\nId: "+products[i].getProductId()+"\nCategory: "+products[i].getCategory()+"\n");
                return;
            }
        }
        System.out.println("Product not found");
        System.exit(0);
    }

    // Binary Search: Assumes products array is sorted by productName
    public static int binarySearch(Product[] products, String productName) {
        int left = 0, right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int cmp = products[mid].getProductName().compareToIgnoreCase(productName);

            if (cmp == 0) {
                return mid;
            } else if (cmp < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }

    // Utility to sort products by productName
    public static void sortProductsByName(Product[] products) {
        Arrays.sort(products, Comparator.comparing(Product::getProductName, String.CASE_INSENSITIVE_ORDER));
    }

    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
        Product items[] = new Product[2];
        int id;
        String name, category;
        for(int i =0;i < 2; i++) {
            System.out.print("Enter product ID for item " + (i + 1) + ": ");
            id = scanner.nextInt();
            System.out.print("Enter product name for item " + (i + 1) + ": ");
            name = scanner.next();
            System.out.print("Enter category for item " + (i + 1) + ": ");
            category = scanner.next();
            items[i] = new Product(id, name, category);
        }
        System.out.println("Enter product name to search : ");
        String search_Name = scanner.next();
        System.out.println("\nLinear Search Result: ");
        linearSearch(items, search_Name);
        sortProductsByName(items);//Sorting the list of products with product names
        int res2 = binarySearch(items, search_Name);
        System.out.println("Binary Search Result: ");
        if(res2 != -1){
            System.out.println("Name: "+items[res2].getProductName()+"\nId: "+items[res2].getProductId()+"\nCategory: "+items[res2].getCategory());
        } else{
            System.out.println("Product not found");
        }
        scanner.close();
    }
}
