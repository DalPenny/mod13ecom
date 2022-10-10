# ORM E-commerce Backend

  [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Github](#github)
  * [Email Address](#email)
  * [Licenses](#licenses)

  
  ## Description
  This project makes a database that is seeded with data for categories, products and tags so that you can access information from the database easiliy

  ## Installation
  need to seed database using mysql with "mysql -u root -p" and then enter password, next SOURCE db/schema.sql  USE ecommerce_db, then SHOW TABLES, SELECT * FROM product_tag; npm run seed to seed the database, next quit the database mysql and do  node server.js to run the server in the server.js file, go back to mysql and do SHOW TABLES, and SELECT * FROM product_tag, need insomnia and vscode

  ## Usage
  run above commands and then open insomnia and run localhost:3001/api/categories as a GET route to see how it works, can change categories to products or tags to get more info. can do categories/4 to get the specific id for one product, can do a POST route to add things to the database with insomnia. can do a delete route to delete a specific id from the database
  ## Licenses
  This project is covered under the MIT license. Please click on the license button to get more info.
  
  ## Contributing
  add more things as needed
  
  ## Tests
  test with insomnia using GET/POST/DELETE routes
  
  ## Github
  Have questions about this project?  
  GitHub: https://github.com/DalPenny  
  Email: dalpenny@github.io.com

