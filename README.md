
## Form Project Details

#### Relevant Files:
1. constants.js --> contains data configuration, including new 'required', 'is_valid', and 'has_label' properties
2. form.js --> component containing form logic and rendering
3. form.css --> styles to override out-of-the-box Semantic UI class styling
4. form.spec.js --> contains rendering test

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

![alt text](public/initial.png)

#### With valid inputs, including conditional shown when age entered < 13 years:
![alt text](public/valid.png)

#### JSON object on submit:
![alt text](public/payload.png)

#### Conditional input not shown when age > 13 years:
![alt text](public/no_parental.png)

#### Phone number validation:
![alt text](public/invalid.png)




### `yarn test`

Launches the test runner in the interactive watch mode.<br />

![alt text](public/tests.png)



