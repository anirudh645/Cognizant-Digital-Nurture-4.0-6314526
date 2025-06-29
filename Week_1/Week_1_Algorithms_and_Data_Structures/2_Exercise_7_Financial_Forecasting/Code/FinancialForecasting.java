import java.util.Scanner;

public class FinancialForecasting {

    // Recursive method to calculate future value
    public static double futureValueRecursive(double initialValue, double growthRate, int periods) {
        if (periods == 0) {
            return initialValue; // Base case
        }
        // Recursive case
        return futureValueRecursive(initialValue, growthRate, periods - 1) * (1 + growthRate);
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // Input from user
        System.out.print("Enter initial investment amount: ");
        double initialInvestment = scanner.nextDouble();
        System.out.print("Enter annual growth rate (as a percentage): ");
        double rate = scanner.nextDouble()/100; // Convert percentage to decimal
        System.out.print("Enter number of periods (years): ");
        int nPeriods = scanner.nextInt();

        //function call to calculate future value
        double recursiveResult = futureValueRecursive(initialInvestment, rate, nPeriods);

        System.out.printf("Future Value (Recursive): %.2f%n", recursiveResult);
        // Close the scanner
        scanner.close();
    }
}