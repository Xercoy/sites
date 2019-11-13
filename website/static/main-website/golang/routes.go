package main

import (
	"net/http"
)

func (s *Server) buildRoutes() {
	s.router.Handle("/projects", http.HandlerFunc(s.getProjectsHandler)).Methods("GET")
}
