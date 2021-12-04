## Preparation

- Install [Node.js](https://nodejs.org/en/).
- To check, if Node.js is installed already, then just check Node.js and npm versions: `node -v` and `npm -v`
- Instal `React Dev tools` in Google extentions. (we need it for future)

## Install React and start with app

- `npx create-react-app [name of app]` (npx intalled with Node.js) - this process will take time.
- `cd [name of app]` (note: if you created the github repo with README file, then you will have also a new one inside [name of app] folder)
- `npm start` and if you see following screen, then you are on right way.
<br>![screen](./src/img/scrn.PNG)
- `npm install --save-dev @babel/core @babel/cli @babel/preset-env` install babel for correct working our code on old browsers
- Set linter in folder `/.github/workflows/` in file `linters.yml`