# Full-Stack Kanban App
A full-stack MERN app for managing tasks, the 'Kanban' way. [View the live site](https://full-stack-kanban.herokuapp.com/)!

The skeleton of this project was built as part of a code-along [Pluralsight course](https://www.pluralsight.com/courses/react-express-full-stack-app-building). I have worked with React, Redux, MongoDB, Node.js and Express separately before taking this course. However, I'd not used all of the technologies together as a MERN stack and host the app on Heroku.

I've developed this application beyond its skeleton by adding in more functionality to manage tasks and comments, improving UI and using newer technologies like Styled Components. 

## Technologies
* ES6
* Webpack
* Babel
* React
* React-Redux
* Redux Middleware
* Redux-Saga
* Axios
* Node.js
* Express
* MongoDB
* UUID
* md5

## Development Tools
* Robo3T
* Postman

## Lessons Learned
This project has concreted my previously shaky understanding of how React, Redux and Redux Middleware (e.g. Sagas) work together. In particular, I now understand how elegant it is to build an app without mutating the original state with methods like `Object.assign()` and `.map()`. I also appreciate why middleware like Redux Sagas are necessary to handle asynchronous and impure functions. I feel like I've entered a new era of React understanding and I'm excited to dive deeper. 

Besides the above, seeing how Node.js and Express can be used with React has filled an otherwise gaping hole in my web development knowledge. Although I've built quite a rudimentary server to support this project, I now know that it's not as scary as I'd otherwise thought to get started with a full-stack MERN application. Having built full-stack apps with Ruby on Rails before, I was a bit intimidated by the number of different technologies that I'd have to learn and pull together. 

I've only worked with PostgreSQL before, so this was my first time working with a non-relational database like MongoDB. It wasn't as difficult as I thought to get started with it and tools like "Robo3T" helped me to visualise my data and manually correct it during development. 
 
## Future Development
* Styled Components (Completed - 14 May)
* Resolve Heroku app crashing Completed - 17 May)
* Secure user passwords in production

## Lessons Learned
I had trouble getting this application on Heroku for the first time. The app was building successfully, but crashed when I tried to view the live site. 

I approached this problem in a couple of ways. Firstly, I double-checked that all of my scripts in my `package.json` worked independently. Once I'd resolved errors with my scripts and made sure the app was bundling correctly, I redeployed it. After another successful build, I checked the heoku logs `heroku logs --tail` for my app - which was still crashing - and I was presented with reams of error messages. 

I sat down over a couple of days and worked through them one-by-one, reading up about Webpack 4, Babel and Heroku along the way. I realised that many of my errors were caused because I updated my dependencies to the latest versions all at once - which isn't something I'll consider doing again without good reason. 

I had asked for help to resolve the problem by asking [StackOverflow](https://stackoverflow.com/questions/61602619/mern-app-heroku-build-succeeds-but-app-crashes), but I ended up getting a quicker response from [Reddit](https://www.reddit.com/r/Heroku/comments/gk8d4u/week_2_heroku_build_succeeds_but_app_crashes_with/). 

It transpired that the final fix I needed to implement was to move the "mongod" dependency from my `devDependencies` to the `dependencies` list. 
