import XCTest
import SwiftTreeSitter
import TreeSitterFlatbuffer

final class TreeSitterFlatbufferTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_flatbuffer())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading flatbuffer grammar")
    }
}
