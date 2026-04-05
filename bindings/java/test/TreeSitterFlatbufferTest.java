import io.github.treesitter.jtreesitter.Language;
import io.github.treesitter.jtreesitter.flatbuffer.TreeSitterFlatbuffer;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

public class TreeSitterFlatbufferTest {
    @Test
    public void testCanLoadLanguage() {
        assertDoesNotThrow(() -> new Language(TreeSitterFlatbuffer.language()));
    }
}
