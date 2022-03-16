# Sklep Internetowy

This app imitates the shopping app which would allow the user to buy products from different shops using one integrated platform (from the customer perspective) or to manipulate the shop stock (from the seller perspective).

## Table of contents
* [Version](#version)
* [Technologies and libraries](#technologies-and-libraries)
* [Project setup](#project-setup)
* [App description](#app-description)

## Version

This is a prototype version of the app developed only for full-sized desktop. Data storage and back-end was created by another developer. No unit tests have been written so far.

## Technologies and libraries

Project is created with:
* Angular, version: 12.2.0
* Typescript, version: 4.3.5 
* RxJS, version: 6.6.0
* Bootstrap, version: 5.1.3
* Bootstrap Icons, version: 1.8.1
* CSS, version: 3.0.0

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



#### My account



### Seller interface

#### Navbar

When your user type is a shop and you log in, just like as for customer user type, you can see a navbar at the top of the app. The navbar also consists of 2 elements on the left and one element on the right. However, different than in the case of logging in as a customer, the drop-down menus on the left relate to, sequentially, products of the particular shop and account management. Under the shopping drop-down menu you can choose between the links to the products of the shop and the form that allows to add new products. The my account drop-down menu consists of the same options as the one form the customer user type, i.e. navigation to the forms allowing you to change your password and other data as well as the 'logout' button. Similarly, on the right side there is a simple welcome message including the login of the user.

#### Products menu



#### My account



## Developers

The front-end for the app was created by the would-be front-end developer Marek Kozień for learning purposes.
The data storage and back-end was created by another developer.

