# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




Solution statement: To help reduce the high prevalence of obesity, cardiovascular disease, and physical inactivity among people with ID it is essential for fitness and wellness professionals to support their inclusion.

## Table of content
- [Description](description)
- [Livelink](Link)
- [Features](feature)
- [Development](development)
- [Setup](setup)
- [Deployment](deployment)
- [License](license)


## description
People with intellectual disabilities (ID) have a high prevalence of physical inactivity and high rates of preventable health conditions, including obesity and cardiovascular disease. Increased participation in fitness and wellness activities can improve their overall health and well-being. However, many fitness and wellness organizations do not know how to effectively serve this population nor how fitness and wellness organizations do not know how to effectively serve this population nor how to support their inclusion into their programs.

# Live link - https://fitness-hero-v2.herokuapp.com/

# Features
    -[pages&navigation]
Home page which is the landing page
Programs page which show programs we offer
Plan page show the available plans and payment opptions
Testimonial page shares what people say about us
Join page which alows the user to get in touch with us

GET and POST
For the get i created my own json api hosted on heroku(https://phase-2-api.herokuapp.com/testimonials)
For the post i utilized Emailjs
Framer-motion for the animations movement on the site

# Development
    - [create-react-app]
create-react-app documentaion above or fork the repo onto your machine
api was first tested with thunderclient
    -[technologies used]
Components - styled with css
Heroku - for hosting backend and front end
React

# setup 
steps for hositing the api 
Create a new github repo clone it onto your machine
Create an account on heroku 
On heroku click link to github
Connetc you repo that contains the api 
Head back to cloned repo
initialize a node project by node init
npm install json-server to install json-server
edit package.json scripts 
"scripts": "node server.js"
create a server.js file
    contents of server.js

    const jsonServer = require('json-server')

    const server = jsonServer.create()
    const router = jsonServer.router('db.json')

    const middlewares = jsonServer.defaults()

    server.use(middlewares)
    server.use(router)

    const port = process.env.PORT || 3000

    server.listen(port, () => {
        console.log(`JSON Server is running on port ${port}`)
    })

push back to github
Deploy the app on heroku

    -[deploying the react app]
create a new app on heroku
link it to the react-app repo and connect
add https://github.com/mars/create-react-app-buildpack
enable automatic deploys 
deploy branch then view to view you newly created react app

# License
MIT License

Copyright (c) 2022 Alvin Ndungu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
