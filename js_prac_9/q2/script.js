const loadscript=async(src)=>{
    return new Promise((resolve, reject) => {
        let script=document.createElement("script");
        script.src=src;
        script.onload=()=>{resolve("success")}
        script.onerror=()=>{reject("failure")}
        document.head.append(script);   
    })
}



let a=loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js");
a.then( (value)=>{
console.log(value);
}).catch((value)=>{
    console.log(value);
});
