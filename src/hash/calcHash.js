import { createReadStream } from 'node:fs'
import { createHash } from 'node:crypto'

const calculateHash = async () => {
	const hash = createHash('sha256')
	const stream = createReadStream('./src/hash/files/fileToCalculateHashFor.txt')
	stream.on('data', buf => hash.update(buf))
	stream.on('end', () => console.log(hash.digest('hex')))
}

calculateHash()
