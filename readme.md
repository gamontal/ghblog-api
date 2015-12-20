# The Unofficial GitHub Blog API (that nobody asked for)

<img align="right" width="290" height="200" src="https://45.media.tumblr.com/7bd6faacf9985e9a8bd8d679f69f922a/tumblr_mgos5bzVqU1rz4zbso1_500.gif" /> 
## Overview

This RESTful style API provides JSON lists of GitHub blog posts by page.

## URI

The API is based at http://ghblog-api.heroku.com.

<br><br>

# Requests

***Note:*** In this document, curly braces { } indicate required items. Square brackets [ ] indicate optional items or placeholders.

```
http://ghblog-api.heroku.com/{category}?[page={page number}]
```
## Parameters

 Name | Value |
 -----|------|
 category| featured, all, ship, engineering, enterprise, conferences, meetup, hire, watercooler, broadcasts
 page    | Page number (returns null when page limit is exceeded). A full page contains a total of 15 posts.

## Object

Field | Description
------|------------
author | The author's username.
id | Post ID.
timestamp | Creation date, in Unix Time.
title | The title of the post.
category | The category of the post.
url | The URL of the post.
avatar_url | The URL of the author's avatar image.

## Example

```
http://ghblog-api.heroku.com/blog/category/featured
```
```json
{
  "page_num": 1,
  "category": "featured",
  "results": [
    {
      "author": "mattcantstop",
      "id": "2093",
      "timestamp": 1450324800,
      "title": "How the Services team uses GitHub",
      "category": "General",
      "url": "https://github.com/blog/2093-how-the-services-team-uses-github",
      "avatar_url": "https://avatars1.githubusercontent.com/u/995208?v=3&s=36"
    },
    {
      "author": "johndbritton",
      "id": "2092",
      "timestamp": 1450238400,
      "title": "Learn Ruby programming with GitHub and Udacity",
      "category": "General",
      "url": "https://github.com/blog/2092-learn-ruby-programming-with-github-and-udacity",
      "avatar_url": "https://avatars3.githubusercontent.com/u/123345?v=3&s=36"
    },
    {
      "author": "nmsanchez",
      "id": "2091",
      "timestamp": 1449547200,
      "title": "Doubling Down on ConnectHome",
      "category": "General",
      "url": "https://github.com/blog/2091-doubling-down-on-connecthome",
      "avatar_url": "https://avatars3.githubusercontent.com/u/8992831?v=3&s=36"
    },
    ...
  ]
```
# License

MIT © [Gabriel Montalvo](http://gmontalvoriv.github.io/)