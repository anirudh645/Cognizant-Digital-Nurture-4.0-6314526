import com.test.ExternalAPI;
import com.test.Service;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.mockito.Mockito.when;

public class ServiceTest {
    @Test
    public void testExternalAPI() {
        // Arrange
        ExternalAPI mockAPI = Mockito.mock(ExternalAPI.class);
        when(mockAPI.getData()).thenReturn("Mock Data");
        Service service = new Service(mockAPI);

        // Act
        String result = service.processData();

        // Assert
        assert result.equals("Processed: Mock Data");
    }
}
