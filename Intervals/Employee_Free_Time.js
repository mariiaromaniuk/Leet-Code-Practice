/*
 Employee Free Time (hard)
 For K employees, we're given a list of intervals representing the working hours of each employee.
 Find out if there is a free interval that is common to all employees. You can assume that each list 
 of employee working hours is sorted on the start time.
 
 Example 1: [[[1,3], [5,6]], [[2,3], [6,8]]];
 Output: [3,5] --> Both employees are free between [3,5].
 
 Example 2: [[[1,3], [9,12]], [[2,4], [6,8]]];
 Output: [4,6], [8,9]
 
 Example 3: [[[1,3], [2,4]], [[3,5], [7,9]]];
 Output: [5,7]
*/

const Heap = require('./collections/heap'); // http://www.collectionsjs.com

class Interval {
  constructor(start, end){
    this.start = start;
    this.end = end;
  }
  
  print_interval(){
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

class EmployeeInterval {
  constructor(interval, employeeIndex, intervalIndex){
    // interval representing employee's working hours
    this.interval = interval;
    // index of the list containing working hours of this employee
    this.employeeIndex = employeeIndex;
    // index of the interval in the employee list
    this.intervalIndex = intervalIndex;
  }
}

