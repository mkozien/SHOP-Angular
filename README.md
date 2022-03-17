# Sklep Internetowy

This app imitates the shopping app which would allow the user to buy products from different shops using one integrated platform (from the customer perspective) or to manipulate the shop stock (from the seller perspective).

## Table of contents

- [Version](#version)
- [Technologies and libraries](#technologies-and-libraries)
- [Project setup](#project-setup)
- [App description](#app-description)
    - [Login and registration](#login-and-registration)
    - [Customer interface](#customer-interface)
    - [Seller interface](#seller-interface)
- [Developers](#developers)


## Version

This is a prototype version of the app developed only for full-sized desktop. Data storage and back-end was created by another developer. No unit tests have been written so far.

## Technologies and libraries

Project is created with:

- Angular, version: 12.2.0
- Typescript, version: 4.3.5
- RxJS, version: 6.6.0
- Bootstrap, version: 5.1.3
- Bootstrap Icons, version: 1.8.1
- CSS, version: 3.0.0

## Project setup

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## App description

The app consists of two separate interfaces which are defined by the type of the user logged. The default page is login page, which also has a link to register page for the users who do not have their accounts yet. Depending on whether you will log in as a customer or as a seller, the app will navigate you to the page that allow you to buy products or manipulate the stock.

### Login and registration

#### Login page

This part of the app is a simple form made up of inputs for login and password and drop-down list defining the type of the user (customer or shop). After filling in the form, you can log in to the app by clicking the button below. In case of having typed the incorrect data, relevant message will pop up. At the bottom of the form you can find the link to the registration page.

#### Registration page

In this part of the app you can find a form including the inputs for the relevant user data. All the required fields are marked with asterisk. The inputs for e-mail and phone number require specific patterns - consecutively email pattern and the pattern made up of numbers. In case of having typed the invalid data, the border of the particular input will become red. Once you correctly fill in the form, you can complete the registration process by clicking the button below. The page will automatically navigate you to the login page. If you already have an account, you can navigate to the login page by using the link underneath the button.

### Customer interface

#### Navbar

When you log in as a customer, you can see a navbar at the top of the app. The navbar consists of 2 elements on the left and one element on the right. The elements on the left side are drop-down menus relating to, sequentially, shopping activities and account management. Under the shopping drop-down menu you can choose between the links to the shopping basket, list of products and shopping history, whereas the my account drop-down menu consists of the navigation to the forms allowing you to change your password and other data as well as the 'logout' button. On the right side there is a simple welcome message including the login of the user.

#### Shopping menu

###### Products
This is a default page rendered after having logged in as a customer. On the screen you can see the table of all products available on the platform. You have access to the following product information: name, price, currency, type and the shop it comes from. On the right side of each row there is an icon that lets you add the product to the shopping basket. 
On the right sight of the page you can see a small table representing the products already added to the basket. It informs you about the name and price of the product you are to buy as well as the quantity of each product. In the last row you can see the total cost of all products you want to purchase. The quantity of each product can be manipulated by the respective icons in each row. You can decrement the quantity (bag dash icon), increment it (bag plus icon) or even delete the whole row by clicking the trash icon. At the bottom of the table you can find two buttons. The red button removes all products from the basket, whereas the green one is responsible for completing the purchase of all products added to the basket.

###### Basket
In this part of the app you can see the extended version of the basket visible on the previously mentioned page. Just as in the small version of the shopping basket, you can manipulate the quantity of each product, delete the products you change your mind about, clear the basket or complete the purchase. The only change relates to the information of the products added to the basket. Except for the name, price and quantity it also informs you of the currency, product type and the shop it belongs to.

###### Shopping history
This part of the app presents you the simple table of the products already bought by you with the aid of the app. It consists of the information regarding the name of the products, their price, currency, type and the name of the shop you bought them from.

#### My account

###### Password change
After having navigated to this part of the app, you find the simple form with one input which allows you to change your password. Once the new password is typed, you need to click the button below to complete the process of changing it.

###### Data change
This part of the app displays the form which consists of 4 inputs representing the address, email, phone number and name of the user. You can change any of the above-mentioned data by typing the new data in the specific input and confirming the change by clicking the button at the bottom of the form. Just as in the registration form, the inputs for e-mail and phone number require specific patterns (consecutively email pattern and the pattern made up of numbers). If they are typed incorrectly, the input borders will become red and relevant message will pop up at the bottom of the form.

###### Logout button
Clicking this button logs you out from the app and navigates you to the login page.

### Seller interface

#### Navbar

When your user type is a shop and you log in, just like as for customer user type, you can see a navbar at the top of the app. The navbar also consists of 2 elements on the left and one element on the right. However, different than in the case of logging in as a customer, the drop-down menus on the left relate to, sequentially, products of the particular shop and account management. Under the shopping drop-down menu you can choose between the links to the products of the shop and the form that allows to add new products. The my account drop-down menu consists of the same options as the one form the customer user type, i.e. navigation to the forms allowing you to change your password and other data as well as the 'logout' button. Similarly, on the right side there is a simple welcome message including the login of the user.

#### Products menu

###### Products
This is a default page rendered after having logged in as a seller. It presents a table which consists of all products managed by the user. The information concerning each product relates to its name, price, currency and type.

###### Product adding
This part of the app allows the user to add a new product to the stock. You can do it by filling in the form which consists of 4 inputs relating to name, price, currency and type of the product. All of the fields are required, therefore the complition of the form will not be possible in case of having any of the inputs left blank. Moreover, the field concerning the price needs to be typed using the specific pattern made up of numbers. If any input is left blank or filled in incorrectly, its border will become red and relevant message will pop up at the bottom of the form. If the form is completed correctly, the product can be added by clicking the button below the inputs.

#### My account

###### Password change
After having navigated to this part of the app, you find the simple form with one input which allows you to change your password. Once the new password is typed, you need to click the button below to complete the process of changing it.

###### Data change
This part of the app displays the form which consists of 4 inputs representing the address, email, phone number and name of the user. You can change any of the above-mentioned data by typing the new data in the specific input and confirming the change by clicking the button at the bottom of the form. Just as in the registration form, the inputs for e-mail and phone number require specific patterns (consecutively email pattern and the pattern made up of numbers). If they are typed incorrectly, the input borders will become red and relevant message will pop up at the bottom of the form.

###### Logout button
Clicking this button logs you out from the app and navigates you to the login page.

## Developers

The front-end for the app was created by the would-be front-end developer Marek Kozień for learning purposes.
The data storage and back-end was created by another developer.
