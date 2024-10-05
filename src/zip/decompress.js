import fs from 'fs'
import zlib from 'zlib'
import { pipeline } from 'stream'

const decompress = async () => {
	const readStream = fs.createReadStream('archive.gz')
	const gunzip = zlib.createGunzip()
	const writeStream = fs.createWriteStream(
		'./src/zip/files/fileAfterDecompress.txt'
	)

	pipeline(readStream, gunzip, writeStream, err => {
		if (err) {
			throw err
		}
	})
}

await decompress()
