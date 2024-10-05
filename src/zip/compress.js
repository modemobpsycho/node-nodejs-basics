import fs from 'fs'
import zlib from 'zlib'
import { pipeline } from 'stream'

const compress = async () => {
	const readStream = fs.createReadStream('./src/zip/files/fileToCompress.txt')
	const gzip = zlib.createGzip()
	const writeStream = fs.createWriteStream('archive.gz')

	pipeline(readStream, gzip, writeStream, err => {
		if (err) {
			throw err
		}
	})
}

await compress()
