## OTP Verification

React OTP Component for your otp verifications this component includes some useful props like a box separator, allow only numbers and classnames for customization.

- Bundled with vite
- Type checking (Typescript)
- Light Weight
  
## Installation
OTP Component requires Node v14+ to run.
Install your dependencies and devDependencies and re-start your dev-server.

**With Npm**:

```sh
npm install @joshmg-77/otp-component
```

**With Yarn**:
```sh
yarn add @joshmg-77/otp-component
```

## Features 

This component accepts the following props

| Props | value 
| ------ | ------ |
| boxNumber | number 
| boxSeparator | number
| onlyNumbers | boolean
| classContainer | string
| classOTP | string
| onValue | Function

## Example of use 

```jsx
import OTPComponent from '@joshmg-77/otp-component'

  <OTPComponent
    boxNumber={6}
    boxSeparator={2} // split regarding the boxNumber
    classContainer="foo"
    classOTP="bar"
    onlyNumbers={false}
    onValue={value => console.log(value)}
  />
```

**Preview**

![src-App tsx - SteepTreasuredCheckpoint - Replit 2022-08-28 21-15-02](https://user-images.githubusercontent.com/53126628/187118129-9147c680-9318-4e8c-b373-882c9c925383.png)

