# JS Fundamentals Assignment

In the `assets` folder is a file called `dataset.js`. It is currently loaded into the global scope of your HTML page right before your `script.js` file, so you have access to its variables.

## About the dataset

The dataset is a collection (array) of James Bond movies. Each movie corresponds to a javascript object, and has a `title`, a `year` and the `actor`.

## What I Want You to Do

I want to see a table of all the James Bond movies in the HTML page, generated dynamically by using the dataset. In this table, I want to see the properties of the dataset (so `title`, `year` and `actor`).

But I also want it to be easy to read - so I want you to differentiate between the different Bond actors by making it so that each different Bond actor has a unique background color for his row (so all Sean Connery movies might have a blue background and all Roger Moore might have a green background, for example).

I also want you to not only show me the year it was released but also tell me how many years ago that is. So for example, in the row for "Goldfinger", I want to know that the movie was made 53 years ago. For this, try to use a function that `return`s the value when you pass in the year as an argument!

## Deliverables

 * I want a fresh Github repo, forked from this assignment's
 * The repo should have Github Pages hosting set up
 * I want you to use ES6-standard Javascript, so no `var`s
 * I want a clean SASS layout with a properly generated CSS file

**Any assignment that does not meet this criteria will be automatically -1 points for each missing element**! You are being marked out of 10, so this can add up.

## How to Use

 1. To begin, "Fork" this repo by clicking the fork button at the top right of the repo page. Make sure you fork it to your own username.
 2. Get the git URI for the forked repo and run `git clone REPO_URL` to get it to your computer.
 3. All your SASS files are in the `sass` directory. The CSS file loaded into the HTML is in the `assets` folder, so compile your SASS file using `node-sass --watch ./sass/style.scss > ./assets/style.css`.
 4. When you are done the assignment, `git add .` your changes and then `git commit -m "your commit message"`. You will then be able to `git push` to your personal (forked) version of this repo.
 5. Try to add your initialisation logic into the `init()` function.
