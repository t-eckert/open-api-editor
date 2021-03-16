# Specification 00

Author: Thomas Eckert (t-eckert)

## Goals

- A user can create an Open API document without knowing the specification.
- They can save and return to documents by logging in.

## Architecture

I want this tool to be extremely interactive so I want to use a JS framework on the frontend. The structure of the Open API document is complex and I think we would be best served by using TypeScript to manage the rigid and large shape of data. Because of the large amount of data used on the frontend, I think a frontend datastore will be important as well. It would be preferable if this datastore supported saving data to the browser's local storage.

I want a backend for managing saving, logging in, and similar tasks.

I want a managed database for storing the Open API documents.

## Stack

I want to use this as an opportunity to improve my React skills. TailwindCSS will help me move fast. I know Python and Flask very well so I am going to use that as the backend API. I also know Postgres and trust it as a great database.

React will take me out of my comfort zone a bit. It will be great to learn!
