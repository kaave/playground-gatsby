# Gatsby template for Simple web contents

## WIP

- [x] dotenv
- [x] Add page transition
- [x] Google Analytics / Tag Manager
  - Use `gatsby-plugin-google-gtag`
- [ ] Connect with Headless CMS
- [x] Deploy to Netlify

## Directory structure

```txt
.
├── .cache            # gatsby generates cache files
├── .husky            # configs that commit hook library `husky`
├── node_modules      # black hole
├── public            # gatsby generates files
├── scripts           # gatsby supports scripts
├── src
|   ├── __generated__ # auto generated codes from GraphQL query
|   ├── components    # common components
|   ├── images        # static images
|   ├── pages         # routes defines container components
|   ├── styles        # style files
|   ├── templates     # root function components
|   └── types         # type declaration files
├── .eslintrc.js
├── .gitignore
├── .prettierignore
├── .prettierrc.yml
├── .stylelintrc.js
├── cspell.json
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── package.json
├── README.md
├── package.json
└── yaml.lock
```
