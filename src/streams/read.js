import fs from 'fs'

const read = async () => {
	const filePath = './src/streams/files/fileToRead.txt'
	const readable = fs.createReadStream(filePath)

	readable
		.on('data', buf => process.stdout.write(buf.toString()))
		.on('end', () => process.stdout.write('\n'))

	process.stdin.pipe(readable)
}

await read()
