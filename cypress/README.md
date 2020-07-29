# Cypress kit

[TOC]

## Bin utils

### `cy`

Easy launcher with minimum and minimized parameters. Argument `=0` treated same as <u>omitted</u>.

#### Parameters

- `--run=<browser>` Sets to run some browser. If omitted opens Cypress dashboard
- `--dev=1` Overrides `baseUrl` with `localhost:$PORT` (default 3000). Interacts with `cy.visit`
- `--spec=<fileName>` Propagates to original `--spec` option with prefix as default suites directory *cypress/integration/* and any extension.
- `--hed=<0|...>` `--headless` or `--headness`. **NOTE** `--head` reserved by `npm` therefore this argument mangled without **A** as **HE**a**D**

#### Usage

```json
// package.json
{
    "scripts": {
        // If needed - add arguments propagation
        "spec": "npm run spec/firefox -- $@ && npm run spec/chrome -- $@",
        "spec/firefox": "npm run cy --run=firefox -- $@",
        "spec/chrome": "npm run cy --run=chrome -- $@",
        "cy": "cy $@"
    }
}
```

```shell
# Open dashboard
npm run spec
# Run 2 suites on localhost in chrome
npm run spec --dev=1 --run=chrome --spec=test1 --hed=0 -- --spec="cypress/integration/test2.js"
```

### `cy_png`

Helper to trick with screenshots comparison with 1 image

```json
// package.json
{
    "scripts": {
        "prespec": "cy_png"
    }
}
```



## Commands

...

## Screenshots testing

List https://docs.cypress.io/plugins/#visual-testing

Notes:

- *cypress-image-snapshot* uses *@types/jest-image-snapshot*

- *cypress-image-diff* looks like outdated *cypress-image-snapshot*

Functionality:

- Compare with 1 image
- Take after scroll
- Multibrowser flexibility
- Controller option to skip all tests

