// to fetch json data from a URL and parse it w weather info 
fetch('http://localhost:3000/weather?address=new jersey').then((response) =>{
        response.json().then((data) => {
    //    checking for errors first
     if (data.error) {
         console.log(data.error)
     } else {
        console.log(data.location)
        console.log(data.forecast)
     }

    })
   
})