package main

import "flag"

func main() {
	var (
		addr      = flag.String("addr", ":8192", "host address")
		jsonStore = flag.String("jsonStore", "./", "path of json files if using JSON Storage")
	)

	flag.Parse()

	opts := map[string]interface{}{}
	opts["jsonStore"] = jsonStore

	server := NewServer(*addr, "json", opts)

	server.Run()
}
