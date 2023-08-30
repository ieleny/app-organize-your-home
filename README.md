# Organize your home

Application to help organize what do you need buy for your home

# Tecnologies

- node:18-alpine
- Ant Design: https://ant.design/components/overview/
- React
- Typescript
- Jotai
- Lint

# Execute docker build

Inside the docker folder execute command:

```
	docker compose up
```

# Architeture - MVVM

# Description

## Links

- https://learn.microsoft.com/pt-br/windows/uwp/data-binding/data-binding-and-mvvm
- https://github.com/RaresAil/cra-template-typescript-mvvm
- https://www.tutorialspoint.com/mvvm/mvvm_responsibilities.htm#:%7E:text=ViewModel%20Responsibilities,data%20and%20change%20the%20data
- https://paulallies.medium.com/clean-mvvm-with-react-and-react-hooks-ebc37b22542f
- https://medium.cobeisfresh.com/level-up-your-react-architecture-with-mvvm-a471979e3f21

## Jotai

Manegement state, documentation: https://jotai.org/docs/core/store

# Links

- https://dev.to/franciscomendes10866/jotai-state-manager-5c07
- https://www.youtube.com/watch?v=yJeamGjFNqQ&ab_channel=CoderOne
- https://www.youtube.com/watch?v=gg31JTZmFUw&ab_channel=JackHerrington

# UML

# Diagram states

# Diagram class

# Eslint

Eslint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

To organize the project and the code, and when the other people make changes to the code, this project uses the .eslintrc.json file to manage the code styles.

If you want to continue with patterns, this part of the readme will explain how to configure VSCode to use ESLint.

## 1. Install VSCode ESLint Plugin

In VSCode, open the extension browser using the button on the left. Search for eslint and install the top result, called “ESLint”.

## 2. Configure VSCode settings to use ESLint for formatting

Open VSCode settings or enter a settings.json file in the .vscode folder and paste these 4 new lines into the top settings object:

```
{
 "eslint.format.enable": true,
 "editor.codeActionsOnSave": {
 "source.fixAll.eslint": true
 }
}

```

The first one turns on ESLint for formatting, and the next 3 make sure that formatting is done on save. That should do it! Save the settings file and close it, we are done.

# GITHUB ACTIONS

# Deploy applicatin in gh-pages

1 - Install gh-pages in react project.

```
	npm install gh-pages --save-dev
```

2 - Create gh-pages in github site, in you repository
3 - Add "homepage" in package.json repository, inside "homepage" will be the site create in ghpages.
4 - Add in package.json this script:

```
	"deploy": "gh-pages -d build"
```

# CI/CD

1 - Inside in you repository, click in tab the option "Action", and search the pipeline call NodeJs, create in branch main.
2 - When you do, the github create a folder call .github inside has a anoter folder call Worflows, in this folder has .yml file with ci cd rules.
3 - If you want, you can add extension in vscode call GitHub Actions, to help the with the process.
