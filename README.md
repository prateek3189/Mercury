# accessibleWebDemo
## v0.0.1

### This project is aimed to provide accessibility throughout webpage for people with disabilities.

## How to run application
install http-server globally in your github repos
npm install http-server -g

got to your project directory and run below command
http-server -p <port number>
eg.
http-server -p 5005
	
and your application will run on
http://localhost:5005/

## Dependencies

Make sure you have the following software and packages installed before testing:

- Download project using command : ```git clone https://github.com/KudosAbhay/accessibleWebDemo.git```
- Install [Node.js v6.x.x](https://nodejs.org/dist/latest-v6.x/) and [NPM v3.x.x](https://nodejs.org/dist/latest-v6.x/)
- Install [lite-server](https://www.npmjs.com/package/lite-server) using `npm install -g lite-server`


## Testing

- Successfully tested till date using:
	- Google Chrome's AXE plugin, provided by <b>Deque</b>
	- <b>NVDA Software</b> for Windows


## Deployment

- To run server for testing, use `lite-server index.html` within the repo folder


## Project Content

- `index.html` - Main HTML Web Page
- `script.js` - JavaScript functionality behind the webpage
- `styling.css` - CSS file for styling webpage
- `README.md` - Information about project and it's content

## Work Done

- Implemented CSS grid for webpage referring to [this](https://codepen.io/sodapop/pen/rmbJoJ) link
- Accessibility flow for the following items:
	- Skip to Main Content
	- Navbar Menu completely accessible using TAB key
	- Jumping to any Section by clicking any specific link from Navbar
- Navbar's menu option dynamically able to hide and show hidden sub-menus using JS function
- Navbar's sub-menu able to dynamically focus the first internal option using JS function

## What's Pending?

- Phone Compatibility for complete webpage w.r.t Navbar Menu and other divisions
- More lucid experience w.r.t. Accessibility
