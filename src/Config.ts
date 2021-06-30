export interface DataField {
	username?: string
	avatar?: string
	message: string
}

export interface Config {
	amount: number
	delay: number
	endDelay?: number
	url: string
	data: DataField[]
}