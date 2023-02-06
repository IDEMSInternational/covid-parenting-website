# covid19parenting.com

## About

Parenting for Lifelong Health (PLH) provides open-source and evidence-based parenting resources to support parents and caregivers during the COVID-19 pandemic and beyond. These resources focus on building positive parent-child relationships and reducing violence against children by learning through play, reinforcing positive and managing difficult behaviours, creating structure and routines, talking about COVID-19, keeping children safe online, and reducing stress and conflict.

This project depends on the following technology:

- [Node][3]
- [Angular][2]
- [Scully][4]

## Development setup

To get started, make sure to install the project dependencies:

- git
- [git lfs][6]
- Node.js 16 - you may find it useful to use a version manager such as [nvm][5]

Once the dependencies are installed, you should [fork][7] this code repository, then clone your fork. Be warned that this repository contains large files that may take a long time to download - there is an [alternative cloning method][8] that skips many large files.
```
git clone git@github.com:IDEMSInternational/covid-parenting-website.git
cd covid-parenting-website
git lfs checkout
```

Install Node package dependencies.
```
npm install
```

And the setup is complete.

## Start the development server

Run:
```
npx ng serve
```

In a web browser, navigate to `http://localhost:4200/` to view. The app will automatically reload if you change any of the source files.

## Build a production-ready site

Scully uses a real web browser to render all site pages to static HTML pages. The version of Scully used in this project is old and the browser it uses by default is also old and may not work. To work around this you can explicitly set which browser is used for rendering via an environment variable.
```
export PUPPETEER_EXECUTABLE_PATH=<path to Chrome or Chromium browser>
```

Run:
```
npm run build
```

The build artifacts will be stored in the `dist/` directory.

To serve this build run:
```
npx scully serve
```

Navigate to http://localhost:1668/ to view.

## When adding new routes...

Scully needs to be given a chance to detect the new routes. Run:
```
npx scully --scanRoutes
```

Then check in the modified src/assets/scully-routes.json

## Testing

There are no tests to speak of really. Requires development.

## Going live

To publish changes to the live site, see [deployment instructions][1].

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


[1]: docs/deployment.md
[2]: https://angular.io/
[3]: https://nodejs.org/
[4]: https://scully.io/
[5]: https://github.com/nvm-sh/nvm
[6]: https://git-lfs.com/
[7]: https://docs.github.com/en/get-started/quickstart/fork-a-repo
[8]: docs/alternative-cloning-method.md
