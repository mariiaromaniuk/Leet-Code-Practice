/*
 Given an array of strings names of size n. You will create n folders in your file system such that, at the ith minute, 
 you will create a folder with the name names[i]. Since two files cannot have the same name, if you enter a folder name 
 which is previously used, the system will have a suffix addition to its name in the form of (k), where, k is the smallest 
 positive integer such that the obtained name remains unique. Return an array of strings of length n where ans[i] is the 
 actual name the system will assign to the ith folder when you create it.

 Example 1:
 Input: names = ["pes","fifa","gta","pes(2019)"]
 Output: ["pes","fifa","gta","pes(2019)"]
 Explanation: Let's see how the file system creates folder names:
 "pes" --> not assigned before, remains "pes"
 "fifa" --> not assigned before, remains "fifa"
 "gta" --> not assigned before, remains "gta"
 "pes(2019)" --> not assigned before, remains "pes(2019)"

 Example 2:
 Input: names = ["gta","gta(1)","gta","avalon"]
 Output: ["gta","gta(1)","gta(2)","avalon"]
 Explanation: Let's see how the file system creates folder names:
 "gta" --> not assigned before, remains "gta"
 "gta(1)" --> not assigned before, remains "gta(1)"
 "gta" --> the name is reserved, system adds (k), since "gta(1)" is also reserved, systems put k = 2. it becomes "gta(2)"
 "avalon" --> not assigned before, remains "avalon"
*/


function getFolderNames(names){
  const map = new Map();
    
  for (const name of names){
    if (!map.has(name)){
    // Store the next available number 1
      map.set(name, 1);
    } else {
      let count = map.get(name);
      let newName = `${name}(${count})`; 
      // Find the next available number because the new file name with () may have already been taken
      // e.g. map = {target: 1, target(1): 1}, name = target
      while (map.has(newName)){
        count++;
        newName = `${name}(${count})`;
      }
      // Update both old name and new name in the map
      map.set(name, count + 1);
      map.set(newName, 1);
    }
  }  
  // ES6 Map is LinkedHashMap so name keys are ordered when iterated 
  return [...map.keys()];
}

// Test
console.log(getFolderNames(["pes","fifa","gta","pes(2019)"])); // ["pes","fifa","gta","pes(2019)"]
console.log(getFolderNames(["gta","gta(1)","gta","avalon"])); // ["gta","gta(1)","gta(2)","avalon"]
console.log(getFolderNames(["wano","wano","wano","wano"])); // ["wano","wano(1)","wano(2)","wano(3)"]
console.log(getFolderNames(["kaido","kaido(1)","kaido","kaido(1)"])); // ["kaido","kaido(1)","kaido(2)","kaido(1)(1)"]
