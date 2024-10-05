import { Worker, isMainThread, workerData } from 'worker_threads'
import os from 'os'

const nCPUs = os.cpus().length

const performCalculations = async () => {
	if (isMainThread) {
		const workers = []
		const results = []

		for (let i = 0; i < nCPUs; i++) {
			const worker = new Worker('./src/wt/worker.js', { workerData: i + 10 })

			worker.on('message', result => {
				results.push(result)

				if (results.length === nCPUs) {
					console.log(results)
				}
			})

			workers.push(worker)
		}
	}
}

await performCalculations()
