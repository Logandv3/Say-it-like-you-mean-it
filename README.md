# Say-it-like-you-mean-it
An application for users to receive feedback regarding what type of emotions and sentiments are perceived in the things they say.  Mostly geared toward those
who are inexperienced in professional communication. 


## Deployed Link


## Contributors
- [Logan Vincent](https://github.com/Logandv3)


## Technologies Used
* Created with [Create React App](https://github.com/facebook/create-react-app)
* Code: JavaScript, HTML, CSS, Node.js, ReactRouter
* Testing: Cypress
* Compiler: Webpack
* Linter: eslint
* Debugging: Chrome Dev Tools
* Version Control/Management: Git/Github/Github Projects


## Setup
- Fork this web app to your own Github account
- Clone the repository to your local machine
- `cd` into the file
- run `npm install`.
- Run `npm start` and visit `localhost:3000`


## Learning Goals
- Create an application demonstrating knowledge of React, React Router, Asnychronous JavaScript and end to end testing with Cypress
- Create personas and user stories to describe the target audience
- Work with restraints to deliver a product for a niche audience and solve a problem for them


## Evolution of Say It Like You Mean It
Frankly this project was quite a mess and I think that stems from an extremely short planning period.  We had to decide on an idea and API to use in a few hours.
I started off with the idea that I would only be posting to an API and cleaning up and displaying the response.  I finished with this and all my routing between
views very quickly.  I then decided I wanted to be able to permanently store all user data so I built a repo with an API and server using Express, Knex and 
PostgreSQL.  I got it all connected, deployed and working.  I started integrating it into my project and it was going ok, but I was still having trouble with the
user being able to post new information to the server.  I was advised to forget that and work on other functionality, which I then did.  Because I had this switch
in focus I have kind of weird and messy implementation code that has some strange order of operations and hooks in the function components.  I would like to
completely remake this app and use my backend and all hooks from the beginning so it is a lot cleaner.


## How to Use



## Wins



## Challenges



## Future Additions
- Make the content input expand as the user types in it so they can see everything they have typed at once.
- Allow the user to enter information using talk to text.
- Use the API and server I created for this.
- Make items searchable.
- Allow the user to comment.
- Allow the user to connect entries so they can see how their communication about the same subject has improved.
- Link the analyzed information to emotional dictionaries to expand on their evaluation and what is covered under each of those description words.
