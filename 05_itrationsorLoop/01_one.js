// For  loop

for (let i = 0; i <= 100; i++) {
    const element = i;

    if (element == 69) {
        // console.log("69 is the best position");
    }
    // console.log(element);
    
}


for (let j = 0; j < 10; j++) {
    // console.log(`outer lopp ${j}`);
    
    for (let i = 0; i < 12; i++) {
        
    // console.log(`inner lopp ${i} and outer loop ${j}`);
    // console.log(i + '*' + j + ' = ' + i*j);
        
    }
    
}

// ++++++++

const myArray = ["corporate","tit","lnct"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
    
}


// ++++++++++++

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`detected 5 `);
        break
        
    }
    // console.log(i);
    
}

// +++++++

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`detected 5 `);
        continue
        
    }
    console.log(i);
    
}