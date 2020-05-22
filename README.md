# Mech API
This is the front-end for Project Mech. This app is a forum where car owners can input their cars' makes and models and search diagnostic trouble codes (DTC) to chat with other car owners for potential solutions.

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
