import fs from 'fs'

const list = async () => {
	try {
		const files = await fs.promises.readdir('./src/fs/files')
		files.forEach(file => {
			console.log(file)
		})
	} catch (err) {
		throw new Error('FS operation failed')
	}
}

await list()
