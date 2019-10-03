var mysql = require("mysql");
var inquirer = require("inquirer");
var fs = require("fs");
var Table = require('cli-table');
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazondb"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected");
});

// function bamazon(callback) {
//   connection.query("SELECT * FROM products", function(err, response) {
//     callback(response);
//   });
// }

var bamazon = function(callback){
	var query = "Select * FROM products";
	connection.query(query, function(err, response){
		if(err) throw err;
		var displayTable = new Table ({
			head: ["Item ID", "Product Name", "Catergory", "Price", "Quantity"],
			colWidths: [10,25,25,10,14]
		});
		for(var i = 0; i < response.length; i++){
			displayTable.push(
				[response[i].id, response[i].product_name, response[i].department_name, response[i].price, response[i].stock_quantity]
				);
		}
		console.log(displayTable.toString());
		callback(response);
	});
}

function start(list) {
  inquirer
    .prompt([
      {
        name: "enter",
        type: "list",
        message: "Would you like to see our store?",
        choices: ["yes", "no"]
      }
    ])
    .then(function(answer) {
      if (answer.enter === "yes") {
        console.log(list);
        let response = list;
        inquirer
          .prompt([
            {
              name: "ID",
              type: "input",
              message:
                "what is the product ID of the item you would like to purchase?",
              filter: Number
            },
            {
              name: "Quantos",
              type: "number",
              message: "How many would you like to buy?",
              filter: Number
            }
          ])
          .then(function(answers) {
            let price;
            let quantos = answers.Quantos;
            for (let i = 0; i < response.length; i++) {
              if (response[i].id === answers.ID) {
                price = response[i].price;
                product = response[i].product_name;
              }
            }
            console.log(price);
            console.log(quantos * price);
            let total = quantos * price;
            console.log("Your total price will be  $ " + total +". To confirm your order, press ctrl + 'c'. Thank you and have a wonderful day!");

            // this is the new prompt space

            inquirer.prompt;
          });
      } else {
        console.log("thank you come again");
        console.log("have a wonderful day");
        connection.end();
      }
    });
}
bamazon(start);

// function bamazon() {
//   connection.connect(function(err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId);

//       afterConnection();})
//   };
