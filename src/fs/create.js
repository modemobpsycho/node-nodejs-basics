import fs from 'fs'

const fileExists = async () => {
	try {
		await fs.promises.access('./src/fs/files/fresh.txt')
		return true
	} catch (err) {
		return false
	}
}

const create = async () => {
	if (await fileExists()) {
		throw new Error('FS operation failed')
	}
	await fs.promises.writeFile(
		'./src/fs/files/fresh.txt',
		'I am fresh and young'
	)
}

await create()
