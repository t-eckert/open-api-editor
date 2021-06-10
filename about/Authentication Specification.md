# Proposal for Authentication using GitHub

<!-- TODO: Update this with the current spec  -->

The service has a static frontend (FE) and Azure Functions based API backend (BE).

## The `user` object

The BE is connected to a database. In that database, `user` objects are stored with the model

```
user {
    id:                 string      required and unique
    github_id:          string      unique
    name:               string
    email:              string      required and unique
    profile_picture:    string

    is_pro:             boolean     required (default false)

    settings:           Settings
    documents:          Document[]
}
```

## Login flow

When a user clicks "Login with GitHub", they are taken to `https://github.com/login/oauth/authorize`. If they login and authorize Open API Editor on the GitHub site, they will be redirected to `https://openapieditor.com/login?code=##########`. The FE takes the `code` parameter from the URL and calls the `loginUser` action.

This sends the `code` to the BE at `https://api.openapieditor.com/login`. The BE issues the code against `https://github.com/login/oauth/access_token` to get the access token for the user.

The BE uses the `access_token` to get the user's information, including their `name`, `github_id`, `email`, and the URL to the user's GitHub profile picture. It attempts to find a `user` with the given `github_id`. If no `user` is found, a new `user` is created.

The BE then generates a JSON Web Token (JWT) with the `access_token` an expiration of 2 weeks. It returns this JWT to the FE. The FE saves the JWT to the browser's local storage.

## Validation while logged in

All calls requiring authentication will pass the JWT on the header of the request. The BE will validate the JWT and behave accordingly. If the JWT is within 6 hours of expiring, a new JWT is created and returned along with the data.

## Logging out

When a user logs out, their JWT is cleared from local storage.
