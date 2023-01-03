CREATE DATABASE reviews;

USE reviews;

CREATE TABLE reviews {
  product_id INTEGER,
  rating Integer,
  summary VARCHAR(255),
  recommended BOOLEAN,
  reported BOOLEAN,
  response VARCHAR(255),
  body VARCHAR (500),
  date DATE,
  reviewer_name,
  helpfullness INTEGER,
  photos ARRAY
}

CREATE TABLE ratings {
  product_id INTEGER,
  1 INTEGER,
  2 INTEGER,
  3 INTEGER,
  4 INTEGER,
  5 INTEGER,
  size INTEGER,
  width INTEGER,
  quality INTEGER,
  comfort INTEGER
}