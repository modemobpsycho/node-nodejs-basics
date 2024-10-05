import { Transform } from 'node:stream'

const transform = async () => {
	const reverseText = new Transform({
		transform(chunk, encoding, callback) {
			const reversedString = chunk.toString().split('').reverse().join('')
			this.push(reversedString)
			callback()
		},
	})

	process.stdin.pipe(reverseText).pipe(process.stdout)
}

await transform()
