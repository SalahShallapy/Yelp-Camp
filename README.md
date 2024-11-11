# YelpCamp

YelpCamp is a full-stack website project where users can create and review campgrounds.
In order to review or create a campground, you must have an account. This project is a part of Colt Steele's web dev bootcamp course on udemy.

This project is being created created using Node.js, Express, MongoDB, and Bootstrap. Passport.js is used to handle authentication.

## Functionalities

> Everyone can view the camps and reviews without signing up or logging in.

> The user will have to login to edit the campground details or any comments.

> The user can only edit/delete the campgrounds and comments that they have added.

> All the data will pe persistent and is stored in the awazon cloud.

## Technologies Used:

> HTML5 - markup language for creating web pages and web applications

> CSS3 - used for describing the presentation of a document written in a markup language

> Bootstrap - free and open-source front-end web framework for designing websites and web applications quickly

> EJS - Embedded JavaScript templating to simplfy the functionality .

> DOM Manipulation - is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document

> Node.js - pen-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side

> Express.js - for building web applications and APIs and connecting middleware

> MongoDB - open-source cross-platform document-oriented NoSQL database program to store details like users info, campgrounds info and comments

> PassportJS - authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application

> Data Associations - associating user data with the respective campgrounds and comments using reference method

## Screenshots

> HomePage
> ![home](./public/imgs/overview.png)

> All Campgrounds
> ![All campgrounds](./public/imgs/all.png)

->Single Campground ShowPage
![showPage](./public/imgs/single.png)

->Login & Register page
![login,register](./public/imgs/register.png)

## Features

- Users can create, edit, and remove campgrounds
- Users can review campgrounds once, and edit or remove their review
- User profiles include more information on the user (full name, email, phone, join date), their campgrounds, and the option to edit their profile or delete their account
- Search campground by name or location
- Sort campgrounds by highest rating, most reviewed, lowest price, or highest price

## Run it locally

1. Install [mongodb](https://www.mongodb.com/)
2. Create a cloudinary account to get an API key and secret code

```
git clone https://github.com/SalahShallapy/Yelp-Camp
cd yelpcamp
npm install
```

Create a .env file (or just export manually in the terminal) in the root of the project and add the following:

```
DATABASEURL='<url>'
API_KEY=''<key>
API_SECRET='<secret>'
```

Run `mongod` in another terminal and `node app.js` in the terminal with the project.

Then go to [localhost:3000](http://localhost:3000/).

To get google maps working check [this](https://github.com/nax3t/google-maps-api) out.
