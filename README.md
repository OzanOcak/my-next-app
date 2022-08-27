```console
npm init -y
npm install next react react-dom
mkdir pages && touch /pages/index.js
```

**npm init** will create package.json file we need to add the script in it

```json
"script":{
    "dev":"next dev",
    "build":"next build",
    "start":"next start"
}
```

and we must create pages directory and index.js in it.

```console
npm run dev
```

## \_app :

it is a component can recieve other components and their props on the page

## Link :

it is client site component instead of using href within a tag so the page won't update in the server

```json
"scripts":{
    "export":"next export"
    }
```

npm run export create static pages onlt includes js, css and html in /out folder

- link to explain --> https://stackoverflow.com/questions/61724368/what-is-the-difference-between-next-export-and-next-build-in-next-js

## netlify

sites> new site from git > project name

build command : npm run build && npm run export

publish directory : out

site settings > change domain

deploys > deploys from master are published automatically, anything is pushed to master, will reflect on netlify

## creating branch

```console
git checkout -b products-page
git status
git add .
git push origin products-page
```

then there will be pull request for master(main) branch by clicking compare&pull, 
create pull reques after first push
this will create another url for the branch, and it will be ready to merge in github

