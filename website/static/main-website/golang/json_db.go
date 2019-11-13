package main

import (
	"errors"
	"io/ioutil"
	"os"
	"path/filepath"
)

type JSONStore struct {
	directory string
}

func (js *JSONStore) Get(resource string) (interface{}, error) {
	file, err := os.Open(filepath.Join(js.directory, resource+".json"))
	defer file.Close()
	if err != nil {
		// streamline error
		return nil, errors.New("cannot find resource")
	}

	fileContents, err := ioutil.ReadAll(file)
	if err != nil {
		// streamline error
		return nil, errors.New("cannot read file content")
	}

	return fileContents, nil
}
