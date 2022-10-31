# Library-Management-System

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

![image](https://user-images.githubusercontent.com/66171389/198882393-18c4451e-d51d-42ad-a441-3be4f72367a1.png)

![image](https://user-images.githubusercontent.com/66171389/198884125-0f94ad3f-5698-4e1c-a489-0244e69d08ea.png)

![WhatsApp Image 2022-10-30 at 7 51 00 PM](https://user-images.githubusercontent.com/66171389/198883702-cac1c372-458e-489c-8f97-dd1d8028aacc.jpeg)

![image](https://user-images.githubusercontent.com/66171389/198883795-8f52743a-967d-42a7-a90f-a9ab908b1f5c.png)

![image](https://user-images.githubusercontent.com/66171389/198882668-d3f885bb-2d62-44de-96c4-e277c351e3c8.png)


Postman

![WhatsApp Image 2022-10-30 at 5 26 03 PM](https://user-images.githubusercontent.com/66171389/198877292-3bbfba81-4667-4109-932e-f15a3c2e3b87.jpeg)

MongoDB Cloud

![image](https://user-images.githubusercontent.com/66171389/198881265-40cbb84f-f8c4-4799-9cd2-19f332ac3731.png)


Languages: 


JavaScript

https://javascript.info/


JavaScript Events

https://flaviocopes.com/javascript-events/


JavaScript Eventloop

https://flaviocopes.com/javascript-event-loop/


Asynchronous Javascript

https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff


ES6

https://www.programiz.com/javascript/ES6


Angular

https://www.tektutorialshub.com/angular-tutorial/


Node.js

https://www.tutorialsteacher.com/nodejs

https://www.tutorialspoint.com/nodejs/index.htm


Mongoose

https://mongoosejs.com/docs/index.html


JSON Web Tokens

https://jwt.io/

https://jwt.io/introduction


Bootstrap

https://getbootstrap.com/docs/5.0/getting-started/introduction/


CoreUI Angular Admin Template

https://coreui.io/demos/angular/4.2/free/#/dashboard


GitHub

https://docs.github.com/en/get-started


Keyboard Shortcuts

https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec#WindowsVersion=Windows_10


Tools:

To download Visual Studio Code

https://code.visualstudio.com/


To download Node.js

https://nodejs.org/en/


API’s 

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


To run the Application:

LMS Angular:

Type: npm start

LMS Server:

Type: npm start


Videos:


1.)Build A Node.js API Authentication With JWT Tutorial |Joi Validation

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

