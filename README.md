```console
git checkout -b next-app
git add .
git commit -m " "
git push origin next-app
```

- go to github project and select next-app branch
- click Compare & pull request
- click create pull request

- it will publish page in new url (click Details)
- we can also merge the branch with main

## styled-components

```console
npm i styled-components
npm i -D babel-plugin-styled-components
touch .babelrc
```

```json
{
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
}
```

and lastly to get styled-component working,we need \_document.js

```console
npm i styled-normalize
```
