let p1=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(10);
        },1000)
    })
}

let p2=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(20);
        },2000)
    })
}


let p3=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(30);
        },3000)
    })
}

const run=async()=>{
    
    console.time("run");
    let a1=p1();
    console.log("1ta holo");
    let a2=p2();
    console.log("2ta holo");
    let a3=await p3();
    
    let a1a2a3=await Promise.all([a1,a2,a3])

    console.log(a1a2a3);

    console.timeEnd("run");

}

run();