var names : string[] = ["Pranav" , "Amit" , "Rubak"] // ';' is optional

for(let i=0 ; i<names.length ; i++)
    console.log(names[i]);

names.push("Abhishek") // Add one element to the array

//id reads index 
for(let id in names)
    console.log(names[id]);

names.splice(1,1) // Remove one element from 1st pos

//n reads values
for(let n of names)
    console.log(n);
