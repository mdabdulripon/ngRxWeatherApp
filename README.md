# [NgRxWeather](https://ngrx.io/guide/store):

### Installation:
- npm install @ngrx/schematics --save-dev
- npm install @ngrx/store --save
- Other ngRx modules:
    - npm install @ngrx/effects --save
    - npm install @ngrx/store-devtools --save
    - npm install @ngrx/router-store --save
    - npm install @ngrx/entity --save
    - npm install @ngrx/data --save

### Generate a store with schematics:
- generate store:
    - ```ng g @ngrx/schematics:store State --root --module app.module.ts```
    - it create a file name ```src/app/reducers/index.ts```.
        - index.js is a store file
        - it also modify the ```app.module.ts``` file

- generate reducer: 
    - ```ng g @ngrx/schematics:reducer Zipcode --group```
        - --group flag create a folder structure

- generate action:
    - ```ng g @ngrx/schematics:action Zipcode --group```
        - --group flag create a folder structure


- generate effects:
    - ```ng g @ngrx/schematics:effect WeatherConditions --module app.module --group```
        - --group flag create a folder structure

