import fs from 'fs'

const write = async () => {
	const filePath = './src/streams/files/fileToWrite.txt'
	const writable = fs.createWriteStream(filePath)
	process.stdin.pipe(writable)
}

await write()
