package main

import (
	"log"
	"net/http"
	"text/template"
)

type HelloView struct {
	Name string
	Age int
}

var helloTemplate = template.Must(template.ParseFiles("index.html"))

func handleHello(w http.ResponseWriter, r *http.Request) {
	data := HelloView{Name: "Raphael", Age: 27}

	helloTemplate.Execute(w, data)
}

func main() {
	http.HandleFunc("/", handleHello)

	log.Println("Listening on port 8080")
	http.ListenAndServe(":8080", nil)
}
