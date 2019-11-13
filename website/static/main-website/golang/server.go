package main

import (
	"log"
	"net/http"
	"time"

	"bytes"

	"fmt"

	"github.com/gorilla/mux"
	"github.com/tylerb/graceful"
)

type Server struct {
	router     *mux.Router
	db         Database
	listenAddr string
}

type Database interface {
	Get(string) (interface{}, error)
}

func (s *Server) getProjectsHandler(w http.ResponseWriter, r *http.Request) {
	// MAYBE USE CONTEXT TO GET
	content, err := s.db.Get("projects")
	if err != nil {
		fmt.Fprintf(w, "Can't find resource")
	}

	http.ServeContent(w, r, "projects", time.Now(), bytes.NewReader(content.([]byte)))
}

func NewServer(addr string, storageType string, opts map[string]interface{}) *Server {
	db := JSONStore{
		*(opts["jsonStore"].(*string)),
	}

	s := &Server{
		router:     mux.NewRouter(),
		db:         &db,
		listenAddr: addr,
	}

	s.buildRoutes()
	return s
}

func (s *Server) Run() {
	http.Handle("/", s)
	srv := &graceful.Server{
		Timeout: 2 * time.Second,
		Server:  &http.Server{Addr: s.listenAddr, Handler: s},
	}

	err := srv.ListenAndServe()
	if err != nil {
		log.Fatal(err)
	}
}

func (s *Server) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	s.router.ServeHTTP(w, r)
}
