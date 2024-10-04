import fs from 'fs'

const remove = async () => {
	try {
		await fs.promises.unlink('./src/fs/files/fileToRemove.txt')
	} catch (err) {
		throw new Error('FS operation failed')
	}
}

await remove()
