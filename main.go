package main

import (
	"log"
	"net/http"
)
const PORT = ":80"

func main() {
	// Setup fileserver (where html,css,js will be served from)
	fileServer := http.FileServer(http.Dir("./website"))
	http.Handle("/", fileServer)


	// Begin server listening on port 8080
	err := http.ListenAndServe(PORT, nil)
	if err != nil {
		log.Fatal(err)
	}
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/home" {
		http.Error(w,"404 not found.", http.StatusNotFound)
		return
	}
}
