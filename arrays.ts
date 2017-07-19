var names : string[] = ["Pranav" , "Amit" , "Rubak"] // ';' is optional

for(let i=0 ; i<names.length ; i++)
    console.log(names[i]);

//id reads index 
for(let id in names)
    console.log(names[id]);

//n reads values
for(let n of names)
    console.log(n);