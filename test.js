const DebugTimer = require('./index');
let timer = new DebugTimer();

(async () => {
	timer.start('Loading file');
	// Let's pretend we are doing some work here:
	await delay(500);
	timer.end('Loading file');	

	timer.start('Processing data');
	await delay(850);
	timer.end('Processing data');
	
	// Let's see the results!
	timer.print();
})();

async function delay(ms) {
	await new Promise(resolve => setTimeout(resolve, ms));
}