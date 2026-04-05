package tree_sitter_flatbuffer_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_flatbuffer "github.com/d-aome/tree-sitter-flatbuffer/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_flatbuffer.Language())
	if language == nil {
		t.Errorf("Error loading flatbuffer grammar")
	}
}
