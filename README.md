# Say-it-like-you-mean-it
A website a user can receive feedback regarding what type of emotions and sentiments are perceived in written communications.  While anyone can benefit from improved communication [Say It Like You Mean It](https://laughable-cars.surge.sh) is primarily geared toward individuals who are inexperienced professional communicators or neurodivergent and seeking to better navigate the digital world.  [Say It Like You Mean It](https://laughable-cars.surge.sh) can help improve communication skills.  A user can input any text based(English) message and see what the underlying attributes of that message are.  User's can view past messages they have analyzed as well as flag those messages to review and study at another time. 

<img width="1917" alt="Screen Shot 2021-11-15 at 5 44 07 PM" src="https://user-images.githubusercontent.com/81990507/141875269-ef1c6f5e-672c-4cdb-9bd5-b926f720a46f.png">


## Deployed Link

[Say It Like You Mean It](https://laughable-cars.surge.sh)

## Link to API Back End (currently not in use)

[Say It Like You Mean It Back End](https://github.com/Logandv3/say-it-like-you-mean-it-api)

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
* Express.js, Knex.js and PostgreSQL were used for database storage but are currently not used in this version.


## Learning Goals
- Create an application demonstrating knowledge of React, React Router, Asnychronous JavaScript and end to end testing with Cypress
- Create personas and user stories to describe the target audience
- Work with restraints to deliver a product for a niche audience and solve a problem for them


## Setup
- Fork this web app to your own Github account
- Clone the repository to your local machine
- `cd` into the file
- run `npm install`.
- Run `npm start` and visit `localhost:3000`


## How to Use
- Create a title for the entry you want to analyze.
- Enter the content you want to analyze.
- Click the analyze button.  It takes a bit for the analyzed response so give it a bit.  You will soon be taken to a feedback page displaying your results.
- Either return to main (entry form) page using the `Back to Main` link or click the open button at the top left of the page.
- When you click the open button in the top left of the page, a navigation bar will unfold displaying other view options.
  1. `All Entries` allows you to see every entry you have made.
  2. `Flagged Entries` allows you to see only the entries you have flagged.

- When you are viewing past entries you can click on the flag button to add it to the flagged entries list.
- You can also click on the main body of the card and be taken to the feedback details from that specific entry.
![How to Use Say It Like You Mean It](https://user-images.githubusercontent.com/81990507/141875130-d2175115-6383-44b8-a757-840ff216952a.gif)


## Evolution of Say It Like You Mean It
Frankly this project was quite a mess and I think that stems from an extremely short planning period.  We had to decide on an idea and API to use in a few hours.
I started off with the idea that I would only be posting to an API and cleaning up and displaying the response.  I finished with this and all my routing between
views very quickly.  I then decided I wanted to be able to permanently store all user data so I built a repo with an API and server using Express, Knex and 
PostgreSQL.  I got it all connected, deployed and working.  I started integrating it into my project and it was going ok, but I was still having trouble with the
user being able to post new information to the server.  I was advised to forget that and work on other functionality, which I then did.  Because I had this switch
in focus I have kind of weird and messy implementation code that has some strange order of operations and hooks in the function components.  I would like to
completely remake this app and use my backend and all hooks from the beginning so it is a lot cleaner.


## Wins
- I learned a lot about the importance of planning and not changing the way you do things halfway through.
- I learned more about using hooks.
- I created a basic expandable navigation bar for the first time.
- I learned more about routing and using the history without mutating it.
- I learned how to set up a backend more efficiently, even though I did not end up using it.


## Challenges
- Creating an app off a limited plan.  
- Changing course multiple times part way through the process.
- Using a class and functional components with hooks made a bit of a mess.
- Funky asynchronous orders.
- I did not have much of a plan for specific styling other than layout.  The creative design part of my brain was off so the design leaves a lot to be desired.


## Future Additions
- Add a loading indicator on UI to let a user know their submission is being analyzed .  Analyzation is given in the API response and it can be pretty slow.
- Make the content input expand as the user types in it so they can see everything they have typed at once.
- Allow the user to enter information using talk to text.
- Use the API and server I created for this.
- Make items searchable.
- Allow the user to comment.
- Allow the user to connect entries so they can see how their communication about the same subject has improved.
- Link the analyzed information to emotional dictionaries to expand on their evaluation and what is covered under each of those description words.
