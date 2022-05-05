# Squirro Frontend Coding Challenge

This repository contains my solution for the Squirro FCC (https://github.com/squirro/frontend-coding-challenge).
While you will find the original fake API (slightly modified) under [book-store-api](book-store-api/), my implemenation is a react app under [book-store-frontend](book-store-frontend/).
To get everything up and running simply execute these two steps in different terminal windows:

```
cd book-store-api; npm i && npm start

cd book-store-frontend; npm i && npm start
```

> Note that I myself used yarn instead of npm

## Frontend Architecture

### API Communication

My implementation relies on React's [createAPI](https://redux-toolkit.js.org/rtk-query/api/createApi) feature to communicate with the provided API.
You will find everything related to this in the [app folder](book-store-frontend/src/app/).

### Shared Configuration

I extracted the static data from the API's index.js into a JSON file and defined some endpoints configuration as well, which is used by both the API and React app.
These files are located under [config](book-store-frontend/src/config/).

### Features

I have sectioned the UI components into the following features:

- Overview
- BookStore
- Bestseller
- Rating
- StoreMeta
- CountryFlag

Each feature has its main entry point with its own index file for simpler importing.
Besides that every feature has a types file, which mainly defines the feature's props and a module SCSS file which is imported by the feature for CSS class context.
I've added some simple, non-comprehensive snapshot tests with enzyme for a basic test coverage.

### Global Types, Helpers and Libs

Some types and functionality which might be used by every feature are separated into [libs](book-store-frontend/src/libs/), [styles](book-store-frontend/src/styles/) and [types](/book-store-frontend/src/types/) respectively.

### Known Issues

#### Deviation from the Requirements

- I've decided to keep the store images as a square with slightly rounded corners instead of making them circle-like, simply because it looked much better to me.
- The web service under https://restcountries.eu was always unreachable for me, that's why I used https://countryflagsapi.com instead.

#### Rating Updates via PATCH not working

Somehow I just didn't get the PATCH request to the API for rating updates to work, even though something like that should be possible [according fake-json-api-server's tests](https://github.com/dbrekalo/fake-json-api-server/blob/master/test/index.js#L120).
I tried several different approaches for the data structure but to no avail, so I chose to stick to the method and structure [defined by JSON:API specifications](https://jsonapi.org/format/#crud-updating) and leave it at that.
