# React Website Builder

Application that serves as the website builder from React Components

## Description

* Mainly for Client projects.
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* This project uses Sanity CMS to store and manage content.
* This project has Storybook which is the component library.
* This project uses Firebase for hosting and deployment.

## Getting Started
### Dependencies
* npm
* tsc
* storybook - component library for demos
* firebase - hosting, functions, analytics
* sanity - cms datastore

### Config
* .env file - create this file if not already created.
  ```
  REACT_APP_RELEASEDATE=2022-11-10
  REACT_APP_SANITY_PROJECTID=
  REACT_APP_SANITY_DB=development
  REACT_APP_API_KEY=
  REACT_APP_AUTH_DOMAIN=
  REACT_APP_DATABASE_URL=
  REACT_APP_PROJECT_ID=
  REACT_APP_STORAGE_BUCKET=
  REACT_APP_MESSAGING_SENDER_ID=
  REACT_APP_APP_ID=
  REACT_APP_FIREBASE_ANALYTICS_TRACKING_ID=
  ```

#### Firebase
* update firebase.json
* update .firebaserc
#### Sanity
* ```cd sanityIo```
* update all places where sanity project Id is used
* update all places where project name is used.
#### Functions
* ```cd functions```
* update sanity client with project ID
* .env file
  * SANITY_PROJECTID=
  * SANITY_DB=development
  * SANITY_API_TOKEN=
  * SENDGRID_API_KEY=
  * SENDGRID_FROM_EMAIL=

### Installing
#### UI
* ```npm install```
#### Functions
* ```cd functions```
* ```npm install```
#### Sanity
* ```cd sanityIo```
* ```npm install```

### Development & Executing program
#### UI
* ```npm start```
* navigate in browser to http://localhost:3000/
#### Functions
* ```npm serve```
#### Sanity
* ```cd sanityIo```
* ```npm run dev```
* navigate in browser to http://localhost:3333/
#### Storybook
* ```npm runs storybook```
* navigate in browser to http://localhost:6006/

### Deployment
#### First Build UI
* ```npm build```
#### Then Build Functions
* ```cd functions```
* ```npm build```
* ```npm html```
* ```firebase deploy```
#### Sanity
* ```sanity deploy```

## Help


## Authors

Contributors names and contact info

James Singleton
The Handsomest Nerd

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details