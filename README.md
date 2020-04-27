# Install the following

`npm i -g generate-react-cli`
This will let you create components easily with: `generate-react component {ComponentName}` [generate-react-cli](https://www.npmjs.com/package/generate-react-cli). This will also create the necessary scss module and test file.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Git Usage

The project is built with [GitHub flow](https://guides.github.com/introduction/flow/) but instead of merges we are using rebase.

This will result in a linear git history making it easier to follow.

# IMPORTANT

Please follow the guidelines of how to write a good commit message which you can find [here](https://chris.beams.io/posts/git-commit/)

### Getting Started with the workflow

1. Read through the setup for rebase workflow [here](https://docs.google.com/document/d/1XVnt1ODvGCVINlgGuykjcnupNb-xyrMyvhOZT-wSQNE/edit?usp=sharing). This should provide you with the basic knowledge to work with the specific commands we are using.
2. Prefer using `git commit --amend` and `git rebase -i 'COMMITID^'` when possible to reduce the number of "fixes" in the commit tree.
3. ...Profit