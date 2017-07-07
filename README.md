# reddit-bot-stream-example

## What is this?

This repo provides an example of a Reddit bot built in Node.js.

Specifically, we are looking at a stream of newly posted comments on reddit, and doing something with their contents.

This is achieved through [Snoowrap](https://www.npmjs.com/package/snoowrap) as a Node.js wrapper for the Reddit API, and [Snoostorm](https://www.npmjs.com/package/snoostorm) as a way to easily access the stream of Reddit comments through Snoowrap.

## Install

`npm i`

Create `.env` at root with the following variables, specific to your Reddit app: https://www.reddit.com/prefs/apps/

```
CLIENT_ID=***
CLIENT_SECRET=***
REDDIT_USER=***
REDDIT_PASS=***
```

## Usage

Running the bot

`npm start`
