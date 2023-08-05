[← Back](../README.md)

# Documentation

## Table of Contents

- [Features](features/README.md)
- [Roadmap](roadmap/README.md)
- [Configurations](configurations/README.md)
- [Contributing](contributing/README.md)
- [React](react/README.md)

## Overview

### Quickstart

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start` and visit [localhost:3000](http://localhost:3000/).

### Development

1. Run `npm start` and watch your changes live at [localhost:3000](http://localhost:3000/).

### Building & deploying

1. Run `npm run build`, which will compile all the necessary files to the `build` directory.
2. Upload the contents of the `build` directory to your web server's root folder.

#### Deploying to GitHub Pages

1. Open [deploy.sh](../deploy.sh) and change `DOMAIN` to your domain, `COMMIT_MESSAGE` to your commit message and `REPO_URL` to the URL of your repo. Make sure you don't add or remove any quotes when editing these values.
2. Run `npm run deploy` - This will create a new build by running the redeploy script, add a CNAME pointing to your domain and then push the build folder to a branch called `gh-pages`.
3. Configure your GitHub Pages to deploy the `gh-pages` branch to your domain.

### Structure

- [src](../src) directory
	
	Contains all code for the application, including CSS, JS and HTML files.

- [public](../public) directory

	Contains all static files like images, webfonts and vector graphics as well as the [index.html](../public/index.html) file, which contains all metadata and contains all bundled scripts after the build step. 

- [docs](.) directory

	You are here. This directory contains all documentation for this project.

- [build](../build) directory

	Contains the static build files after [building](#building--deploying) the application. This directory is not included in the GitHub repository.