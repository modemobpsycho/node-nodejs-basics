const parseArgs = () => {
	const args = process.argv.slice(2)

	const argsObj = {}
	for (let i = 0; i < args.length; i += 2) {
		const key = args[i].replace('--', '')
		const value = args[i + 1]
		argsObj[key] = value
	}

	Object.keys(argsObj).forEach(key => {
		console.log(`${key} is ${argsObj[key]}`)
	})
}

parseArgs()
