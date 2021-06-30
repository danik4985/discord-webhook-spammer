
# discord webhook spammer

Want to make a token logger unusable? Or have any other reason to spam a discord webhook? This is the tool just for that.

## Installation 

Simply download the bundled file from the releases page. You will need to have nodejs installed.

## Running

You can simply run the script with
```bash
node spammer.js <config file>
```
Everything including modules is packed into one file, so you **don't** need to run anything like `npm install`. The only file you need is the js file you can download from the releases page.
  
## config.yml API

The config.yml file that you need consists of 5 parts:
- **`amount`**:`number` - How many messages to send
- **`delay`**:`number` - Delay (in ms) between messages
- **`endDelay`**:`?number` - Delay (in ms) between all messages sent and app quit *(Default: 0)*
- **`url`**:`string` - The webhook url
- **`data`**:`DataField[]` - Array of possible messages

### DataField
- **`message`**:`string` - The message text
- **`username`**:`?string` - Custom webhook username *(Optional)*
- **`avatar`**:`?string` - Custom webhook avatar url *(Optional)*

### Example

```yml
amount: 100
delay: 1000
endDelay: 10000
url: '<webhook url>' # Hehe im not giving you my webhook url

data:
  - 
    message: 'Spam'
  -
    message: 'you are being spammed'
    username: 'delete your webhook'
    avatar: 'https://cdn.discordapp.com/avatars/650824189741105164/b7258860ccca8b0962f4540718d050ec.webp?size=128'
```

## Building

If you dont trust the bundled file, you can always build and run from source. Simply download the source code, extract it into a folder, open in in terminal and run
```bash
npm install

# For running without bundeling
npm start

# For bundeling
npm run bundle
```
You will need to have tsc installed and if you want to bundle, you will need esbuild too.
Running the bundle npm script will produce a `app.bundle.js` file that is standalone (doeasnt even need node_modules \[only node])
## License

This software is licensed under the [MIT license](https://choosealicense.com/licenses/mit/).

  
## Roadmap

- [ ] Embed support
- [ ] Logging options
  
## Disclaimer

This tool was made for

- Educational purpuoses
- Breaking token loggers

**I AM IN NO WAY RESPOSIBLE FOR ANYTHING YOU DO WITH THIS SOFTWARE. YOU ARE RESPOSIBLE FOR YOUR OWN ACTIONS. NOT ME.**
