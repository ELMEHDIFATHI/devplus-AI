-- Activer l'extension pgvector pour la recherche sémantique RAG
CREATE EXTENSION IF NOT EXISTS vector;

-- Créer des bases distinctes si nécessaire ou initialiser le schéma principal
CREATE SCHEMA IF NOT EXISTS devpulse;