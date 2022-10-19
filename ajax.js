console.log("Ajax tutorial in one video");


let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
     console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
    xhr.open('GET', 'https://reqres.in/api/users/2', true);
    // xhr.open('GET', 'dhruv.txt', true);

    // USE THIS FOR POST REQUEST
    // xhr.open('POST', 'https://jsonplaceholder.typicode.com/todos/1', true);
    // xhr.getResponseHeader('Content-type', 'application/json');


    // What to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On progress');
    }


    // xhr.onreadystatechange = function () {
    //     console.log('ready state is ', xhr.readyState);
        
    // }

    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){

            console.log(JSON.parse(this.responseText))
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    // xhr.send();
    xhr.send(params);

    console.log("We are done!");

}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
    xhr.open('GET', 'https://reqres.in/api/users/2', true);
    // xhr.open('GET', 'dhruv.txt', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            // let list = document.getElementById('list');
            // let str=`<li>${this.responseText} </li>`;
            str = "";
            for (key in obj)
            {
                if (key=="data") {
                    for (a in obj[key]) {
                        str += `<li>${obj[key][a].first_name} ${obj[key][a].last_name} </li>`;
                    }
                }
                // str += `<li>${obj[key]} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}