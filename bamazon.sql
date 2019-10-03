DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BBgun",  sporting_goods, 29.99, 25), ("Tennis_balls",  sporting_goods, 8.99, 30), ("Basketball",  sporting_goods, 24.99, 32), ("Baseball bat",  sporting_goods, 49.99, 27), ("Fruit Loops",  groceries, 5.99, 25), ("Hot Pockets",  groceries, 6.99, 20), ("5 gum",  groceries, 3.99, 100), ("Tia Rosa tortilla chips",  groceries, 2.99, 18), ("50 Shades of Grey",  books, 11.99, 15), ("Curious George",  books, 6.99, 18), ("Auto-biography of Fabio: Why I refuesed to believe it wasn't butter",  books, 15.99, 15), ("The Notebook",  books, 0.99, 15);
