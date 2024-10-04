import fs from 'fs'

const rename = async () => {
	const oldName = 'wrongFilename.txt'
	const newName = 'properFilename.md'

	try {
		await fs.promises.access(`./src/fs/files/${oldName}`)
	} catch (err) {
		if (err.code !== 'ENOENT') {
			throw err
		}
	}

	try {
		await fs.promises.access(`./src/fs/files/${newName}`)
		throw new Error('FS operation failed')
	} catch (err) {
		if (err.code !== 'ENOENT') {
			throw err
		}
	}

	await fs.promises.rename(
		`./src/fs/files/${oldName}`,
		`./src/fs/files/${newName}`
	)
}

await rename()
