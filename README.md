[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/docs/latest/api/)
[![mongoose](https://img.shields.io/badge/mongoose-%23E34F26.svg?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/docs/)
[![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)](https://nodemon.io/)
[![EJS](https://img.shields.io/badge/ejs-%23B4CA65.svg?style=for-the-badge&logo=ejs&logoColor=black)](https://ejs.co/)
[![passportjs](https://img.shields.io/badge/passport-%2320232a.svg?style=for-the-badge&logo=passport&logoColor=%2361DAFB)](https://www.passportjs.org/)
[![mapbox](https://img.shields.io/badge/mapbox-%23323330?style=for-the-badge&logo=mapbox&logoColor=white)](https://www.mapbox.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/docs/)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://formease-95d4c.web.app/">
    <img src="./src/assets/logo.jpg" alt="Logo" height="80"  >
  </a> -->
  <h1 align="center">YelpCamp</h1>
<!-- 
  <p align="center">
    <a href="https://formease-95d4c.web.app/">View Demo</a>
    ·
    <a href="https://github.com/SalahShallapy/FormEase-V.2-/issues">Report Bug</a>
  </p> -->
</div>

YelpCamp is a full-stack website project where users can create and review campgrounds.
In order to review or create a campground, you must have an account. This project is a part of Colt Steele's web dev bootcamp course on udemy.

## Project Overview

### HomePage

![home](./public/imgs/overview.png)

### All Campgrounds

![All campgrounds](./public/imgs/all.png)

### Single Campground ShowPage

![showPage](./public/imgs/single.png)

### Login & Register page

![login,register](./public/imgs/register.png)

## Features

- Users can create, edit, and remove campgrounds
- Users can review campgrounds once, and edit or remove their review
- User profiles include more information on the user (full name, email, phone, join date), their campgrounds, and the option to edit their profile or delete their account
- Search campground by name or location
- Sort campgrounds by highest rating, most reviewed, lowest price, or highest price

## installation

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

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

   <p align="right">(<a href="#top">back to top</a>)</p>
