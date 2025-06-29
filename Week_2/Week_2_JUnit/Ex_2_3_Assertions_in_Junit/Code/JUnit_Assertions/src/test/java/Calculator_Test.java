import com.test.Calculator;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class Calculator_Test {
    Calculator cal = new Calculator();

    @Test
    public void Multiply_Test() {
        assertEquals(20, cal.multiply(4, 5));
        assertEquals(10, cal.multiply(2, 5));
    }

    @Test
    public void Divide_Test(){
        assertEquals(20, cal.divide(100, 5));
        assertEquals(2, cal.divide(10, 5));
    }
}
