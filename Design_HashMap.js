/*
 Design a HashMap without using any built-in hash table libraries: {} or new Map()
 It should include these functions:
 • put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
 • get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
 • remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.
*/


class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++){
      let value = key[i].charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  
  // Separate chaining
  set(key,value){
    let index = this.hash(key);
    if (!this.keyMap[index]){
      this.keyMap[index] = [];
    } else {
      // check if it's alredy exist and update it
      for (let i = 0; i < this.keyMap[index].length; i++){
        if (this.keyMap[index][i][0] === key){
          this.keyMap[index][i][1] = value;
          // return here so we're not duplicating this pair at the end
          return;
        } 
      }
    }
    // add the pair if it's not exist
    this.keyMap[index].push([key, value]);
  }
  
  get(key){
    let index = this.hash(key);
    if (this.keyMap[index]){
      for (let i = 0; i < this.keyMap[index].length; i++){
        if (this.keyMap[index][i][0] === key) 
          return this.keyMap[index][i][1];
      }
    }
    return undefined;
  }
  
  remove(key){
    let index = this.hash(key);
    if (this.keyMap[index]){
      for (let i = 0; i < this.keyMap[index].length; i++){
        if (this.keyMap[index][i][0] === key){
          this.keyMap[index].splice(i, 1);
          return;
        } 
      }
    }
  }
  
  keys(){
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++){
      if (this.keyMap[i]){
        for (let j = 0; j < this.keyMap[i].length; j++){
          if (!keysArr.includes(this.keyMap[i][j][0]))
            keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArr;
  }
}

let ht = new HashTable(17);
ht.set("maroon","#800000");
ht.set("yellow","#FFFF00");
ht.set("olive","#808000");
ht.set("salmon","#FA8072");
ht.set("lightcoral","#F08080");
ht.set("mediumvioletred","#C71585");
ht.set("plum","#DDA0DD");
ht.set("purple","#DDA0DD");
ht.set("violet","#DDA0DD");

ht.keys().forEach(function(key){
  console.log(key, ": ", ht.get(key));
});

console.log(" ");
ht.remove("maroon");
ht.set("yellow","#000000");

ht.keys().forEach(function(key){
  console.log(key, ": ", ht.get(key));
});

// Algorithm   Average   Worst 
// Space        O(n)      O(n)
// Search       O(1)      O(n)
// Insert       O(1)      O(n)
// Delete       O(1)      O(n)
