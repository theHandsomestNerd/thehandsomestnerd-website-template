# React Website Builder

Component Library that serves as a website builder using React Components

## Description

* Mainly for Client projects.
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* This project uses Sanity CMS to store and manage content.
* This project has Storybook which is the component library.
* This project uses Firebase for hosting and deployment.
* The web-client directory uses the component library to deploy a website

### Dependencies
* npm
* tsc
* storybook - component library for demos
* firebase - hosting, functions, analytics
* sanity - cms datastore
* parcel - the build tool for the client

## Getting Started
### Config
* .env file - create this file if not already created in the top level and the web-client
  ```
  REACT_APP_SANITY_APIVERSION=2021-03-25
  REACT_APP_SANITY_APIVERSION_COCKTAILS=2021-03-25
  REACT_APP_SANITY_DB=development
  REACT_APP_SANITY_PROJECTID=<your sanity project id>
  REACT_APP_API_KEY=<your projects firebase api key>
  REACT_APP_AUTH_DOMAIN=<your projects firebase auth domain>
  REACT_APP_DATABASE_URL=<your projects firebase database Url>
  REACT_APP_PROJECT_ID=<your projects firebase project id>
  REACT_APP_STORAGE_BUCKET=<your projects firebase storage bucket>
  REACT_APP_MESSAGING_SENDER_ID=<your projects firebase message sender id>
  REACT_APP_APP_ID=<your projects firebase app ID>
  REACT_APP_FIREBASE_ANALYTICS_TRACKING_ID=<your projects google analytics tracking ID>
  REACT_APP_BASE_ROUTE=<your projects web client base route. Access your website site_url/base_route/page_route>
  REACT_APP_SANITY_PROJECTID_COCKTAILS=<sanity cocktails project id>
  REACT_APP_SANITY_DB_COCKTAILS=<sanity cocktails database>
  REACT_APP_BAR_INVENTORY_SLUG=<your projects cocktail bar inventory slug>
  REACT_APP_GOOGLEMAPS_EMBED_API_KEY=<your projects google maps embed api key>
  ```

#### Firebase
* update .firebaserc with your projects firebase project Id
#### Sanity
* ```cd sanityIo```
* update all places where sanity project Id is used
* update all places where project name is used.
#### Functions
* ```cd functions```
* update sanity client with project ID
* .env file
  ```
  SANITY_PROJECTID=
  SANITY_DB=development
  SANITY_APIVERSION=
  SANITY_API_TOKEN=<create this in your Sanity dashboard if your app needs permission to create sanity documents>
  SENDGRID_API_KEY=
  SENDGRID_FROM_EMAIL=
  ```
### Installing
#### Component Library
* ```npm install```
#### Web Client
* ```npm install```
#### Functions
* ```cd functions```
* ```npm install```
#### Sanity
* ```cd sanityIo```
* ```npm install```

### Development & Executing program
#### UI
* in the top level directory
  * ```npm build```
  * ```npm publish```
* go to web-client directory
  * Modify files in web-client for your project and latest version of the-handsomest-nerd-internal component library
  * ```npm start```
  * navigate to http://localhost:1234/
#### Functions
* ```npm serve```
#### Sanity
* ```cd sanityIo```
* ```npm run dev```
* navigate in browser to http://localhost:3333/
#### Storybook
 * ```npm run storybook```
 * navigate in browser to http://localhost:6006/ or whatever output says

### Deployment
#### First Build & Publish Component Library
* version bump top level package.json
* ```npm publish```
#### Build web client
* update web-client package.json with latest version of the-handsomest-nerd-internal
* ```npm install && npm start```
* you can stop the server(this step is just to the get dist dir in the client since this is needed for deploying functions which is the server side code)
#### Then Build Functions
* ```cd functions```
* ```npm run deploy```
#### Sanity
* ```sanity deploy```

## Help

## Authors

Contributors names and contact info

James Singleton
The Handsomest Nerd

## License

This project is licensed under the GPL-3.0-or-later License - see the LICENSE.md file for details