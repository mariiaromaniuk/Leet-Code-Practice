/*
   Implement the class UndergroundSystem that supports three methods:
   1. checkIn(int id, string stationName, int t)
   A customer with id card equal to id, gets in the station stationName at time t.
   A customer can only be checked into one place at a time.
   2. checkOut(int id, string stationName, int t)
   A customer with id card equal to id, gets out from the station stationName at time t.
   3. getAverageTime(string startStation, string endStation) 
   Returns the average time to travel between the startStation and the endStation.
   The average time is computed from all the previous traveling from startStation to endStation 
   that happened directly. Call to getAverageTime is always valid.
   You can assume all calls to checkIn and checkOut methods are consistent. That is, if a customer 
   gets in at time t1 at some station, then it gets out at time t2 with t2 > t1. 
   All events happen in chronological order.
*/

var UndergroundSystem = function() {
    this.passengers = {};
    this.routes = {};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.passengers[id] = { station: stationName, time: t };
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const time = t - this.passengers[id].time;
    // route name string => startStationName*endStationName
    const route = `${this.passengers[id].station}*${stationName}`;
    delete this.passengers[id];
    if (!(route in this.routes))
        this.routes[route] = { totalTime: 0, numTrips: 0 };
    this.routes[route].totalTime += time;
    this.routes[route].numTrips++;
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const route = `${startStation}*${endStation}`;
    return this.routes[route].totalTime / this.routes[route].numTrips;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
