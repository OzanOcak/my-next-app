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
