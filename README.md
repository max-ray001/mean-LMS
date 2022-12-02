# Library-Management-System
 It helps librarians to maintain database of new books and books that are borrowed by members along with their due dates. It tracks the records of the number of books in the library, number of books issued and returned and calculates fine charges, etc. 
 
(Has implementation of Template driven & Reactive forms, Form validation, Password hashing, Role based access, JWT Authentication, AuthGuard, Middleware, HTTP Interceptors, Services, Proxy Configuration, HTTP requests, Controller, Components & Directives, Profile, Pagination, Pipes, Primary & Foreign Key, Populate, Add, Update, Delete, Bulk upload & Bulk delete concepts.)

User

![image](https://user-images.githubusercontent.com/66171389/198881453-05c3e5fc-a3fb-4811-ac04-eafded9f7749.png)

![image](https://user-images.githubusercontent.com/66171389/198881397-2a1462af-1d0d-484e-a04f-cf89af9a79eb.png)

![image](https://user-images.githubusercontent.com/66171389/198881370-dbf82c56-fc44-45c9-a913-bcc07db3992a.png)

![image](https://user-images.githubusercontent.com/66171389/198881291-b6955332-4d8c-4e4a-8c3d-d587912a319b.png)

![image](https://user-images.githubusercontent.com/66171389/198881497-dc9b5f9b-c225-422a-9fd3-2403dbadaaa8.png)

![image](https://user-images.githubusercontent.com/66171389/198881523-33e19b45-6ca8-46b1-be73-2bce2291afd4.png)

![image](https://user-images.githubusercontent.com/66171389/198881737-ef90a032-d26b-47d2-8e03-80e4f3e467d8.png)

Admins

![image](https://user-images.githubusercontent.com/66171389/198881952-6d0b0fe0-373e-4eee-947a-fda3326111dc.png)

![image](https://user-images.githubusercontent.com/66171389/198881971-695720fc-d3f8-4e34-b6fa-4d9591ff8fcd.png)

![image](https://user-images.githubusercontent.com/66171389/198882063-3ad69a6f-4fde-490e-bd30-08359273cc0f.png)

Librarians

![image](https://user-images.githubusercontent.com/66171389/198882316-d40b1fd7-82f8-44cc-91bc-6d38dd4754f3.png)

![image](https://user-images.githubusercontent.com/66171389/198884125-0f94ad3f-5698-4e1c-a489-0244e69d08ea.png)

![WhatsApp Image 2022-10-30 at 7 51 00 PM](https://user-images.githubusercontent.com/66171389/198883702-cac1c372-458e-489c-8f97-dd1d8028aacc.jpeg)

![image](https://user-images.githubusercontent.com/66171389/198883795-8f52743a-967d-42a7-a90f-a9ab908b1f5c.png)

![image](https://user-images.githubusercontent.com/66171389/198882668-d3f885bb-2d62-44de-96c4-e277c351e3c8.png)

Postman

![WhatsApp Image 2022-10-30 at 5 26 03 PM](https://user-images.githubusercontent.com/66171389/198877292-3bbfba81-4667-4109-932e-f15a3c2e3b87.jpeg)

![image](https://user-images.githubusercontent.com/66171389/199181158-6f7cd478-5fc0-42cb-bcf2-30a6efde2150.png)

![image](https://user-images.githubusercontent.com/66171389/199182213-624b7d52-c47b-412d-b82f-cb2933605703.png)

MongoDB Cloud

![image](https://user-images.githubusercontent.com/66171389/199181704-07d86b31-0b76-4008-88ff-4cf6a674df77.png)

***

To run the Application:

LMS Angular - npm start

LMS Server - npm start

***

API’s BASED ON ROLES:

Users

POST - /api/usersauth/userregister

POST - /api/usersauth/userlogin

GET - /api/users/bookcount/book_id (view stock count of a book)

GET - /api/users/userbooks?page=1&limit=2 (view all books owned by a user)

GET - /api/users/userbooks (view all books owned by a user)

GET - /api/users/user (view signed in user)

GET - /api/books/categorybooks (for getting a category of books)

GET - /api/books/allbooks (view all books)

Admins

POST - /api/adminsauth/adminregister

POST - /api/adminsauth/adminlogin

GET - /api/admins/alladmins (view all admins)

GET- /api/admins/allmembers (view all members)

GET- /api/admins/alllibrarians (view all librarians)

GET - /api/admins/users/allusers (view all users)

POST- /api/admins (add an admin)

GET - /api/admins/admin_id (view an admin)

PUT - /api/admins/admin_id (update an admin)

DELETE - /api/admins/admin_id (delete an admin)

POST- /api/admins/users ( add a user)

GET - /api/admins/users/user_id (view a user)

PUT - /api/admins/users/user_id (update a user)

DELETE - /api/admins/users/user_id (delete a user)

Librarians

GET - /api/librarians/userbooks (view details of books owned by a user)

GET - /api/librarians/bookusers/book_id (view details of users who own a book
with same id)

GET - /api/librarians/status/pending (for getting pending status user details)

GET - /api/librarians/status/returned (for getting status returned user details)

GET - /api/issuebooks/issue_id (for getting all records in IssueBooks)

POST - /api/issuebooks/issue_id (for adding a record in IssueBooks)

PUT- /api/issuebooks/issue_id (for updating a record in IssueBooks)

DELETE - /api/issuebooks/issue_id (for deleting a record in IssueBooks)

PUT - /api/librarians/fineentry/issue_id (for updating fine amount)

POST - /api/books/book_id (for adding a book)

PUT - /api/librarians/bulkupload (for bulk uploading books)

GET - /api/books/book_id (for getting details of a book)

PUT- /api/books/book_id (for updating a book details)

DELETE - /api/books/book_id (for deleting a book)

PUT - /api/librarians/bulkdelete (for bulk deleting with book id’s)

The primary functions of the MEAN stack technologies are:

Angular: Accept requests and display results to end-user.

Node.js: Handle Client and Server Requests.

Express.js: Make requests to Database and return a response.

MongoDB: Store and retrieve data.

***

GitHub - https://docs.github.com/en/get-started

Bootstrap - https://getbootstrap.com/docs/5.0/getting-started/introduction/

CoreUI Angular Admin Template - https://coreui.io/demos/angular/4.2/free/#/dashboard

Keyboard Shortcuts - https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec#WindowsVersion=Windows_10

***

TOOLS AND TECHNOLOGIES:

VISUAL STUDIO CODE

Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git. Users can change the theme, keyboard shortcuts, preferences, and install extensions that add additional functionality.

To download Visual Studio Code - https://code.visualstudio.com/

EXPRESS.JS

Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage and hybrid web application. It is a layer built on the top of the Node js that helps manage servers and routes. Express was created to make APIs and web applications with ease. Express.js provides simple routing for requests made by clients. It also provides a middleware that is responsible for making
decisions to give the correct responses for the requests made by the client.

To download Node.js - https://nodejs.org/en/

MIDDLEWARE

Middleware is software that different applications use to communicate with each other. It provides functionality to connect applications intelligently and efficiently so that you can innovate faster. Middleware acts as a bridge between diverse technologies, tools and databases so that you can integrate them seamlessly into a single system. The single system then provides a unified service to its users. For example, a Windows frontend application sends and receives data from a Linux backend server, but the application users are unaware of the difference. The primary or most commonly-used HTTP methods are POST, GET, PUT, PATCH, and DELETE.

JOI

Joi in Express.js is a popular module for data validation. This module validates the data based on schemas. There are various functions like optional(),
required(), min(), max(), etc which make it easy to use and a user-friendly module for validating the data.

MONGODB

MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL) which is deemed non-free by several distributions. MongoDB stores data records as documents which are gathered together in collections. A database stores one or more collections of documents.

POSTMAN

Postman is an API platform for developers to design, build, test and iterate their APIs.

***

LANGUAGES:

JavaScript - https://javascript.info/

JavaScript Events - https://flaviocopes.com/javascript-events/

JavaScript Eventloop - https://flaviocopes.com/javascript-event-loop/

Asynchronous Javascript - https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff

ES6 - https://www.programiz.com/javascript/ES6

Node.js - https://www.tutorialsteacher.com/nodejs  |  https://www.tutorialspoint.com/nodejs/index.htm

Mongoose - https://mongoosejs.com/docs/index.html

TypeScript - https://www.typescripttutorial.net/

Angular - https://www.tektutorialshub.com/angular-tutorial/

***

1.) JSON Web Tokens - https://jwt.io/  |  https://jwt.io/introduction

2.) A common use of JSON is to exchange data to/from a web server.

When sending data to a web server, the data has to be a string. Use JSON.stringify() to convert a JavaScript object into a string.

When receiving data from a web server, the data is always a string. Parse the data with JSON.parse(), and the data becomes a JavaScript object. 

3.) Calling app.use(cors()) will enable the express server to respond to preflight requests. A preflight request is basically an OPTION request sent to the server

before the actual request is sent, in order to ask which origin and which request options the server accepts.

4.) Mongoose schemas support a timestamps option. If you set timestamps: true, Mongoose will add two properties of type Date to your schema:

createdAt: a date representing when this document was created

updatedAt: a date representing when this document was last updated

Mongoose will then set createdAt when the document is first inserted, and update updatedAt whenever you update the document using save(), updateOne(), updateMany(),

findOneAndUpdate(), update(), replaceOne(), or bulkWrite(). The createdAt property is immutable, and Mongoose overwrites any user-specified updates to updatedAt by
default.

5.) Mongoose Model:

* Model.aggregate()

* Model.count()

* Model.deleteMany()

* Model.deleteOne()

* Model.find()

* Model.findById()

* Model.findByIdAndDelete()

* Model.findByIdAndRemove()

* Model.findByIdAndUpdate()

* Model.findOne()

* Model.findOneAndDelete()

* Model.findOneAndRemove()

* Model.findOneAndReplace()

* Model.findOneAndUpdate()

* Model.insertMany()

* Model.populate()

* Model.remove()

* Model.replaceOne()

* Model.update()

* Model.updateMany()

* Model.updateOne()

***

VIDEOS:

1.)Build A Node.js API Authentication With JWT Tutorial | Joi Validation

https://www.youtube.com/watch?v=2jqok-WgelI

2.)CRUD REST API using Node | Express | MongoDB

https://youtu.be/eYVGoXPq2RA

3.)Create A Paginated API With Node.js

https://www.youtube.com/watch?v=ZX3qt0UWifc

4.)Angular Tutorial

https://www.youtube.com/watch?v=0eWrpsCLMJQ&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ&index=1

5.)Login and Registration

https://www.youtube.com/watch?v=toRmWFzB6-E

6.)Special Events Route Guard

https://www.youtube.com/watch?v=7L80dKtfHe0
