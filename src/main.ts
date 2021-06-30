import * as fs from 'fs'
import * as YAML from 'yaml'
import * as chalk from 'chalk'
import { Webhook } from 'discord-webhook-node'

import { Config, DataField } from './Config'
import { getMessage } from './getMessage'

const config: Config = YAML.parse(String(fs.readFileSync(process.argv[2])))
const webhook = new Webhook(config.url)

var sent = 0
var message: DataField

function send() {
	message = getMessage(config.data)

	if (message.username != undefined) webhook.setUsername(message.username)
	if (message.avatar != undefined) webhook.setAvatar(message.avatar)

	const promise = webhook.send(message.message)

	promise.then(() => {
		sent++
		_send()
	})

	promise.catch((err) => {
		console.log(chalk`{red [ERR]} {whiteBright ${err}}`)
	})
}

function _send() {
	if (sent < config.amount) setTimeout(() => {
		console.log(chalk`{blue [INFO]} {whiteBright Sending} ${sent + 1}/${config.amount}`)
		send()
	}, (sent === 0) ? 0 : config.delay) // Dont wait when seding first time
	else {
		console.log(chalk`{yellow [WAIT]} {whiteBright Waiting} ${config.endDelay}ms`)
		setTimeout(process.exit, config.endDelay || 0)
	}
}

_send()
