# E-Commerce Back End 

<p align="center">
    <img src="https://img.shields.io/badge/Javascript-yellow" />
    <img src="https://img.shields.io/badge/express-orange" />
    <img src="https://img.shields.io/badge/Sequelize-blue"  />
    <img src="https://img.shields.io/badge/mySQL-blue"  />
    <img src="https://img.shields.io/badge/dotenv-green" />
</p>
   
## Description
Backend for e-commerce site built utilizing MySQL2, Express, Sequelize, and dotenv. Keeps track of products and inventory, with useful categories and tags to organize them. It containes API routes that point to the standard CRUD operations for the datatypes in the database (categories, products, tags). These routes have the following functionality:

* View existing categories, products, tags
* Search individual categories, products, and tags
* Create new categories, products, and tags
* Update existing categories, products, and tags
* Delete categories, products, and tags
* Create/View associations between products, categories, and tags

![Demo Gif](./assets/demo.gif)

💻 [Click here for the view the full video demo](https://drive.google.com/file/d/1BFX5t3_X9Xk72voCGE27IK5tmhlGl-J5/view)

## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Credits](#credits)
  - [Questions](#questions)

## Installation

💾   This project requires the following already installed to your machine:
* [Node.js](https://nodejs.org/en/)
* [MySQL2](https://www.npmjs.com/package/mysql2)
* [Insomnia Core](https://insomnia.rest/download) (or similar application)

1. `git clone` the repo to your local machine so that you have the project files
2. Run `npm install` to install the following npm package dependencies specified in `package.json`:
* `sequelize`
* `MySQL2`
* `express`
* `dotenv`
3. You will need to enter your MySQL2 credentials into the .env file provided in the repo in order to connect to your local MySQL server
4. Open up MySQL shell and input: `source db/schema.sql` to create the initial database into your local server. 
5. Quit MySQL shell and input the following in your terminal to seed the sample data:
`npm run seed`

## Usage
In order to set-up the application for use, first complete the following steps:
1. You will need to enter your MySQL2 credentials into the .env file provided in the repo in order to connect to your local MySQL server
2. Open up MySQL shell and input: `source db/schema.sql` to create the initial database into your local server. 
3. Quit MySQL shell and input the following in your terminal to seed the sample data:
`npm run seed`

Now that the application is set up, you can complete the next steps to start using the application:
4. Start the server by entering `node server.js` in the command line
5. After you have successfully connected to the server, open Insomnia
6. Send GET, POST, PUT, and DELETE requests in the JSON format that the data is presented in order to view, create, update, and delete data respectively. 


## License
Please refer to the license in the repo

## Credits
* Built by Grace Yao utilizing sample code provided by 2022 Trilogy Education Services, LLC

---
## Questions

If you have any questions about this project, or have any inquiries about contributions or collaboration, please feel free to reach out! Refer to the contact information below:

GitHub: @gyao1487

Email: gee.yao@gmail.com