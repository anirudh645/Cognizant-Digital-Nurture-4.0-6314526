import com.test.FullName;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestFullName {
    static FullName name;

    //This runs before each test method
    @BeforeEach
    public void setUp(){
        name = new FullName();
        System.out.println("FullName object created.");
    }

    //This is a test method
    @Test
    public void testFullName(){
        //Arrange
        String firstName = "James";
        String lastName = "Bond";
        String expectedFullName = "JamesBond";

        //Act
        String actualFullName = name.full_Name(firstName, lastName);

        //Assert
        assertEquals(expectedFullName, actualFullName);
    }

    //This runs after all the test method
    @AfterAll
    public static void tearDown(){
        name = null;
        System.out.println("FullName object destroyed.");
    }

}
