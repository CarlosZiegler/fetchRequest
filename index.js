// Example for a Request for a API

const response = await fetch('http://example.com/movies.json');
const myJson = await response.json();
console.log(JSON.stringify(myJson));

// Example for a Request for a php file

// Since api fetch () returns a Promisse, our function must be Async
async function getDataAsync(index) 
            {
           
            // define Url   
            const url = "call.php";
            
            // create a FormData ("key","value")
            const data = new FormData();
                data.append('shopTurnover', 'true');
                data.append('index', index);
            
            //send request
            const response = await fetch(url, {
                    method : "POST",
                    body: data
                });
            
            //wating response    
            let dataResponse = await response.text()

            return dataResponse;
            }
