let openRequest=indexedDB.open("jojodb",1)
openRequest.addEventListener("success",evt=>console.log(`sucess:${evt.target.result}`))
openRequest.addEventListener("error",evt=>console.log(`error ${evt.target.errorCode}`))
