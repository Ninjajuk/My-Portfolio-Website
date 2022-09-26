// const hamburgerButton = document.getElementById('hamburger')
// const navList = document.getElementById('nav-list')

// function toggleButton() {
//     navList.classList.toggle('show')
// }

// hamburgerButton.addEventListener('click', toggleButton)
// const hee=document.getElementById('.myimage')
// const prev1=document.getElementById('prev-1')
// const prev2=document.getElementById('prev-2')
// prev1.addEventListener("click",getdata)
// prev2.addEventListener("click",getdata)
// console.log(hee)
// function getdata(){
//     fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
//     .then(response=>response.json())
//     console.log()
//     .then(data=>{
       
//         hee.innerHTML=`<img src="${data.url}"/>`
//     })
// }
// getdata()
// const fethdata=fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//   console.log(fethdata);
  
//   async function getimage(url){
//     let response=await fetch(url);
//     let data=await response.json();
//     document.getElementById("myimage").src=data;
//     // console.log(data)
//   }
//   getimage(fethdata);
// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         var data = JSON.parse(this.responseText);
//         document.getElementById("myimage").src = data.results[0].picture.large
        
//       }
//     };
//     xhttp.open("GET", "https://randomuser.me/api", true);
//     xhttp.send();
//   }

//   let imagedataload = [];
//   const fetchData = () => {
//    fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(resp => resp.json()).then(resp => {
//      console.log("checkig resp", resp);
//      imagedataload = resp;
//    }).catch(err => {
//      console.error(err);
//    })
//   }

//   window.onload = () => {
//    fetchData();
//   }

  


// // api url
// const api_url = 
//       "https://employeedetails.free.beeceptor.com/my/api/path";
  
// // Defining async function
// async function getapi(url) {
    
//     // Storing response
//     const response = await fetch(url);
    
//     // Storing data in form of JSON
//     var data = await response.json();
//     console.log(data);
//     if (response) {
//         hideloader();
//     }
//     show(data);
// }
// // Calling that async function
// getapi(api_url);
  
// // Function to hide the loader
// function hideloader() {
//     document.getElementById('loading').style.display = 'none';
// }
// // Function to define innerHTML for HTML table
// function show(data) {
//     let tab = 
//         `<tr>
//           <th>Name</th>
//           <th>Office</th>
//           <th>Position</th>
//           <th>Salary</th>
//          </tr>`;
    
//     // Loop to access all rows 
//     for (let r of data.list) {
//         tab += `<tr> 
//     <td>${r.name} </td>
//     <td>${r.office}</td>
//     <td>${r.position}</td> 
//     <td>${r.salary}</td>          
// </tr>`;
//     }
//     // Setting innerHTML as tab variable
//     document.getElementById("employees").innerHTML = tab;
// }

