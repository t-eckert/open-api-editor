# Specification

Author: Thomas Eckert (t-eckert)

## Motivation

Open API/Swagger docs are powerful tools for creating and maintaining APIs and their documentation. Making their management easier will empower more people to design better APIs. A person should not need to know the Open API specification in order to create an Open API document. They should be able to create this document and learn the specification at the same time.

## Architectural overview

I want this tool to be extremely interactive so I want to use a JS framework on the frontend. The structure of the Open API document is complex and I think we would be best served by using TypeScript to manage the rigid and large shape of data. Because of the large amount of data used on the frontend, I think a frontend datastore will be important as well. It would be preferable if this datastore supported saving data to the browser's local storage.

I want a backend for managing saving, logging in, and similar tasks.

I want a managed database for storing the Open API documents.

### Authentication

The backend is connected to a database. In that database, `user` objects are stored with the model

```
user {
    id:                 string      required and unique
    github_id:          string      unique
    name:               string
    email:              string      required and unique
    profile_picture:    string

    settings:           Settings
    documents:          Document[]
}
```

## Login flow

When a user clicks "Login with GitHub", they are taken to `https://github.com/login/oauth/authorize`. If they login and authorize Open API Editor on the GitHub site, they will be redirected to `https://openapieditor.com/login?code=##########`. The frontend takes the `code` parameter from the URL and calls the `loginUser` action.

This sends the `code` to the backend at `https://api.openapieditor.com/login`. The backend issues the code against `https://github.com/login/oauth/access_token` to get the access token for the user.

The backend uses the `access_token` to get the user's information, including their `name`, `github_id`, `email`, and the URL to the user's GitHub profile picture. It attempts to find a `user` with the given `github_id`. If no `user` is found, a new `user` is created.

The backend then generates a JSON Web Token (JWT) with the `access_token` an expiration of 2 weeks. It returns this JWT to the frontend. The frontend saves the JWT to the browser's local storage.

## Validation while logged in

All calls requiring authentication will pass the JWT on the header of the request. The backend will validate the JWT and behave accordingly. If the JWT is within 6 hours of expiring, a new JWT is created and returned along with the data.

## Logging out

When a user logs out, their JWT is cleared from local storage.
