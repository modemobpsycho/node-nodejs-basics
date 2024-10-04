import fs from 'fs'

const read = async () => {
	try {
		const content = await fs.promises.readFile(
			'./src/fs/files/fileToRead.txt',
			'utf-8'
		)
		console.log(content)
	} catch (err) {
		throw new Error('FS operation failed')
	}
}

await read()
