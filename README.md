# Debug Timer: benchmark the performance of multiple parts of your code #

Measure the duration of multiple parts of your code, then effortlessly print
all the timer results at once to the console.

## What you get ##

Sample output:

```
Loading file: 506 ms
Processing data: 858 ms
```

## How to get it ##

You will use three methods: `timer.start('task name')`, `timer.end('task name')`,
and `timer.print()` to show the results in the console. The `print()` method also
returns the results as string, so you can save it to some logs if you need.

```js
const DebugTimer = require('debugging-timer');
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

	// Prints:
	// Loading file: 506 ms
	// Processing data: 858 ms
})();

async function delay(ms) {
	await new Promise(resolve => setTimeout(resolve, ms));
}
```

## Questions and feedback ##

Welcome in the linked GitHub repository.