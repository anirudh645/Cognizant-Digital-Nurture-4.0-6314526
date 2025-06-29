import com.test.ExternalAPI;
import com.test.Service;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.mockito.Mockito.verify;

public class ServiceTest {
    @Test
    public void testVerifyInteraction() {
        ExternalAPI mockApi = Mockito.mock(ExternalAPI.class);
        Service service = new Service(mockApi);
        service.processData();
        verify(mockApi).getData();
    }
}
