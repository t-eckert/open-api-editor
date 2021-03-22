# Proposal for Authentication

The service has a static frontend (FE) and Azure Functions based API backend (BE).

## The `user` object

The BE is connected to a database. In that database, `user` objects are stored with the model

```
user {
    id:                 string      required and unique
    name:               string
    email:              string      required and unique
    hashed_password:    string      required
    hashed_token:       string
    is_pro:             boolean     required (default false)

    settings:           Settings
    documents:          Document[]
}
```

## Login flow

When a user clicks "Login", they are taken to a form with the fields "email" and "password". The user enters values for both. The FE sends the `email` and `password` values on a POST request to the BE at the `/login` path. 

The BE takes the `email` value on the request and looks in the database for a `user` with an email matching the given email. If no `user` is found, the BE returns `"Cannot log user in", 403` to the FE. If a `user` is found, the BE hashes the `password` and compares it to the stored `hashed_password`. If they do not match, the BE returns `"Cannot log user in", 403` to the FE.

If the hashed `password` matches the stored `hashed_password`, then the BE generates a JSON Web Token (JWT) with an expiration date 1 month from creation. The BE hashes the JWT and stores it in the `hashed_token` value for the `user` object. The BE returns the unhashed JWT to the FE.

The FE stores the JWT in the browser's local storage. 

## Validation while logged in

Any call made by the user which requires authentication will have the user `id` and JWT passed as the header to the BE. The BE will search for a `user` with the given `id`, hash the JWT, and compare it with the `hashed_token`. If they match, the call proceeds. Otherwise, the call fails and the BE returns `"Forbidden", 403`.

## Logging out

When a user clicks "Logout", the FE clears the JWT from the browser's local storage and sends a POST request to the BE to clear the `hashed_password` value.
