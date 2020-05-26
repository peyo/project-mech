# Mech App
This is the front-end for Project Mech. This app is a forum where car owners can input their cars' makes and models and search diagnostic trouble codes (DTC) to chat with other car owners for potential solutions.

![Preview01](https://user-images.githubusercontent.com/55764217/82862884-a44db480-9ed5-11ea-9c46-064c8ced7a17.png)

## Limitations
**Car Makes**<br/>
You can only add **Toyota, Honda, and Chevrolet** cars at the moment to your garage. Technically, you can add any car. There just isn't data to support them outside of the ones mentioned previously. This is because the database isn't fully populated with other cars.

**DTC**<br/>
These are the only codes that will work at the moment. Same reason as above, this is because the database isn't fully populated with other DTCs.<br/><br/>
*Toyota*: **P1100, P1120, P1121, P1125**<br/>
*Honda*: **P1106, P1108, P1121**<br/>
*Chevrolet*: **P1674, P1760, P1273**<br/>
*Universal (Does not require the user to have a specific car to see and post to these comments)*: **P0100, P0101, P0102, P0103**

## Zeit
https://project-mech.now.sh/

## Tech
Reactjs, jQuery, CSS

## npm i
```
npm install moment --save
npm install --save @fortawesome/fontawesome-free
```

## Routes

```
/WelcomePage
/LoginPage
/ForgotPage
/RegistrationPage
/DtcCommentListPage
/InnerDtcCommentListPage
/GaragePage
/DtcSearchPage
/NotFoundPage
```

## Components

```
/App
/Utility
/Header
/Footer
/LoginForm
/RegistrationForm
/DtcCommentListItem
/InnerDtcCommentListItem
/InnerDtcCommentListItemHeader
/CarForm
/CarListItem
/CarSelectDropdown
/DtcForm
/FilteredDtcCommentListItem
/FilteredDtcCommentListItemHeader
/CommentForm
```

## Back-end
https://github.com/peyo/project-mech-api

## Data
This is a collection of DTC by make and VINs that correspond with world manufacturer identifiers (WMI).
https://github.com/peyo/dtc-and-vin-data

## More Preview

![Preview02](https://user-images.githubusercontent.com/55764217/82862888-a57ee180-9ed5-11ea-9a8d-5f1b36fd8631.png)
![Preview03](https://user-images.githubusercontent.com/55764217/82862891-a6b00e80-9ed5-11ea-9b63-09a935587fa7.png)
![Preview04](https://user-images.githubusercontent.com/55764217/82862896-a879d200-9ed5-11ea-926d-6ee6c07718e0.png)
