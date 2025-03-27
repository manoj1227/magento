<div align="center">
  <h1>e2e tests</h1>
  <br/>
  <br/>
</div>

###install cypress
```sh
npm install cypress --save-dev
```

### Run Tests
```sh
npx cypress run --headed
```

If you want to execute the tests on headless mode you can do it with the following line:
```sh
npx cypress run
```

If you want to execute the tests on chrome browser headed mode you can do it with the following line:
```sh
npx cypress run --headed --browser chrome 
```

If you want to execute the tests on chrome browser headless mode you can do it with the following line:
```sh
npx cypress run --browser chrome 
```

If you want to execute the specific tests you can do it with the following line:
```sh
npx cypress run --browser chrome --spec ./cypress/e2e/tests/Test01.cy.js
```

If you want to execute the the tests with specific tag you can do it with the following line:
```sh
npx cypress run --record --tag single
```
