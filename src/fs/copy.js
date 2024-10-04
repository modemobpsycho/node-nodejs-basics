import fs from 'fs'

const copy = async () => {
	try {
		await fs.promises.access('./src/fs/files')
		try {
			await fs.promises.access('./src/fs/files_copy')
			throw new Error('FS operation failed')
		} catch (err) {
			if (err.code !== 'ENOENT') {
				throw err
			}
		}

		await fs.promises.mkdir('./src/fs/files_copy')
		const files = await fs.promises.readdir('./src/fs/files')
		await Promise.all(
			files.map(file =>
				fs.promises.copyFile(
					`./src/fs/files/${file}`,
					`./src/fs/files_copy/${file}`
				)
			)
		)
	} catch (err) {
		throw new Error('FS operation failed')
	}
}

await copy()
