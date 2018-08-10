# WHERE AM I

'Where am I' is a spaced-repetition app for associating famous monuments with the countries they are in and for inspiring future travel. Match the correct country name to each image. Countries you identify accurately will show up less often.

You can find the hosted app [here](https://thawing-shore-65597.herokuapp.com/dashboard) and the server code [here](https://github.com/thinkful-ei21/Mike-Giovanni-Spaced-Repetition-Server)


### SCREENSHOTS

![Desktop Page](https://github.com/thinkful-ei21/Mike-Giovanni-Spaced-Repetition-Client/blob/master/src/images/Screenshot%20from%202018-08-10%2014-25-50.png?raw=true "Desktop Screenshot")

![Mobile Small Login Page](https://github.com/thinkful-ei21/Mike-Giovanni-Spaced-Repetition-Client/blob/master/src/images/Screenshot%20from%202018-08-10%2014-28-02.png?raw=true "Mobile Small  Login Page")![Mobile Small Home Page](https://github.com/thinkful-ei21/Mike-Giovanni-Spaced-Repetition-Client/blob/master/src/images/Screenshot%20from%202018-08-10%2014-27-47.png?raw=true "Mobile Small  Home Page")

![Mobile Small Register Page](https://github.com/thinkful-ei21/Mike-Giovanni-Spaced-Repetition-Client/blob/master/src/images/Screenshot%20from%202018-08-10%2014-52-34.png?raw=true "Mobile Small Register Page")![Mobile Small Home Page](https://github.com/thinkful-ei21/Mike-Giovanni-Spaced-Repetition-Client/blob/master/src/images/Screenshot%20from%202018-08-10%2014-27-28.png?raw=true "Mobile Small  Home Page")

### APPlICATION FEATURES

- Country cards each have a collection of images, one of which is displayed each time the card comes up
- Cards maintain a record of how many times in a row they were answered correctly
- Correctly answered cards will be seen exponentially less often
- Users have their progress tracked and stored across log-in sessions
- Mobile UI
- JWT Authentication for users

### STACK

- React/Redux
- MongoDB/Mongoose
- JWT Auth/Passport
- Mocha/Chai testing on back-end
- Heroku


### LESSONS LEARNED

- Trello boards are super helpful
- Set aside more time for testing next time

### FUTURE FEATURES:
- Add daily sessions with end of session summary statistics
- Since we have multiple images for each location, If user gets answer wrong multiple times, it will stick to just a couple of images,
  if user is on winning streak, the count of images that are cycled through increase
- Pull images from google dynamically

