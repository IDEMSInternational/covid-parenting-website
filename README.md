# CovidParentingWebsite

## View Preview of website as on master [here](http://covid-parenting.idems.international/)
Also view Netlify control panel [here](https://app.netlify.com/sites/covid19-parenting) (Authorised users only)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## When adding new routes
When adding new Angular routes to the website make sure to run
```
npm run scully -- --scanRoutes
```
Then check in the modified src/assets/scully-routes.json

## Going live

To make changes to the live site, see [deployment instructions][1].

[1]: ./docs/Deployment.md
