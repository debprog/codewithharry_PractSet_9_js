let p = () => {
    return new Promise((resolve,reject) => {
      setTimeout(()=>{reject(   new Error("My Error")  )   },3000)
    })
  }


  let a = async()=>{
    try
    {
        let c = await p();
        console.log(c);

    }
    catch(err){
        console.log("The error is"+err);


    }
   
  }

  a();