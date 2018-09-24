# Super Nintendo Game Info
Searchable information on every official North American SNES game release. View a synopsis from Wikipedia and videos from YouTube all in one place!

[Check it out in action.](https://supernintendogameinfo.ianrosedev.com/)

## Installation
**You’ll need to have Node >= 6 on your machine.**

From the location where you want to install the app:
```
git clone https://github.com/ianrosedev/Super-Nintendo-Game-Info.git
```
Then from the ```root``` directory:
```
npm run install-all
```
The app and all dependencies will now be installed.

**You need to get a YouTube API key!**

The [Google Developers documentation](https://developers.google.com/youtube/v3/getting-started) will guide you through the process. You will need a 'simple API key'. After obtaining a key, copy it and place it in ```server/helpers/keys.js```.

The app is now ready to go!

## Starting the App
From the ```root``` directory:
```
npm start
```
This will start both the frontend and API servers concurrently. If Chrome is available, the app will open automatically.

The app is now running at: ```http://localhost:3000```

If you need access to the API server, it is running at: ```http://localhost:3001```

## Testing
### Client:
From the ```client``` directory:

Test the whole app:
```
npm test  
```
Test an individual component:
```
npm test -- [ComponentToTest].test.js
```

### Server:
There are currently no tests for the server.
## Build
The ```client``` side is built with React using the Facebook ```create-react-app```. More documentation will be found at the [GitHub page](https://github.com/facebookincubator/create-react-app).

From the ```client``` directory:
```
npm run build
```
A production ready build folder will be produced.

## Usage
When you load the app you will be at the landing page. From there you can check out the specially chosen 'Featured Game' or scroll down to the 'Full Game Listing'. The list is searchable and contains all of the North American SNES game releases plus a few more.

After browsing the list or searching for a game, you can click on a link to a page specifically for that game. In this page you will find an excerpt of the games Wikipedia page and three YouTube videos showing gameplay.

If you return to the landing page after a search, your search will be saved. This will enable you to check out games in a specific series one after another.

Have fun!

## License
### Internet Systems Consortium license


Copyright (c) 2017, Ian Rose

Permission to use, copy, modify, and/or distribute this software for any purpose
with or without fee is hereby granted, provided that the above copyright notice
and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
THIS SOFTWARE.
