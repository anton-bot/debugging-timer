/**
 * @fileoverview  Measure the execution time of multiple sections of your code,
 * then effortlessly print all the timer results at once to the console.
 * @author Anton Ivanov <anton@ivanov.hk>
 */

'use strict';

/**
 * Measure the execution time of multiple sections of your code, then
 * effortlessly print all the timer results at once to the console.
 */
class DebugTimer {
  constructor() {
    this.data = {};
  }

  /**
   * Begin the timer.
   * @param {string} what - Label, e.g. "loading file".
   */
  start(what) {
    this.data[what] = {
      start: Date.now(),
    };
  }

  /**
   * End the timer.
   * @param {string} what - Label, e.g. "loading file".
   */
  end(what) {
    this.data[what].end = Date.now();
    this.data[what].total = this.data[what].end - this.data[what].start;
  }

  /**
   * Print the results to the console.
   * @returns {str} - The formatted result, same as those printed to console.
   */
  print() {
    let str = '';
    for (let key of Object.keys(this.data)) {
      str += `${key}: ${this.data[key].total} ms \r\n`;
    }

    console.log(str);
    return str;
  }
}

module.exports = DebugTimer;