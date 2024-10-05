import { spawn } from 'child_process'

const spawnChildProcess = async args => {
	const child = spawn('node', ['./src/cp/files/script.js', ...args], {
		stdio: 'pipe',
		shell: true,
	})

	process.stdin.pipe(child.stdin)
	child.stdout.pipe(process.stdout)

	child.on('exit', code => {
		console.log(`Child process exited with code ${code}`)
	})

	child.on('error', err => {
		console.error('Failed to start child process:', err)
	})
}

spawnChildProcess(['someArgument1', 'someArgument2'])
