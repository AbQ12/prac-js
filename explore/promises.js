// promises is a manual way of making js asynchronous

//promise creation
function fetchdata(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let success = false;
            if(success){
                resolve('data fetched successfully');
            }
            else{
                reject('error fetching data');
            }
        }, 3000);
    })
}

//promise consumption
// let response  = fetchdata();
// console.log(response);

fetchdata()
    .then((data)=>console.log(data))
    .catch((error)=>console.error(error));