import { DataField } from './Config'
import { rand } from './rand'

export function getMessage(data: DataField[]) {
	if (data.length === 1) return data[0]
	else return data[rand(0, data.length - 1)]
}