"use strict";
const commentForm = document.getElementById("form-id");
const formUl = document.getElementById("formList");
commentForm.addEventListener("submit", handleFormSubmit);
function handleFormSubmit(event) {
  event.preventDefault();
  const commentName = event.target.commentName.value;
  const commentDescription = event.target.commentDescription.value;
  if (commentName !== "" && commentDescription !== "") {
    appendForm(commentName, commentDescription);
    event.target.reset();
  } else {
    alert("please enter a name and description");
  }
}
function appendArray(arrayName) {
  formUl.innerHTML = "";
  arrayName.sort(function(a,b){
    return new Date(b.timestamp) - new Date(a.timestamp);
  });  
  for (let i = 0; i < arrayName.length; i++) {
    const commentObj = arrayName[i];
    const nameList = document.createElement('li');    
    nameList.classList.add("nameList");    
    const nameListElem = document.createElement('h4');
    nameListElem.classList.add("nameListElem");
    nameListElem.innerText = commentObj.name;    
    const commentDescriptionList = document.createElement('p');
    commentDescriptionList.classList.add("commentDescription");
    commentDescriptionList.innerText = commentObj.comment;
    const dateListItem = document.createElement('p');
    dateListItem.classList.add("dateListItem");
    dateListItem.innerText = new Date(commentObj.timestamp).toLocaleDateString();
    nameList.appendChild(nameListElem);
    nameList.appendChild(commentDescriptionList);
    nameList.appendChild(dateListItem);
    formUl.appendChild(nameList);    
  }
}
function appendForm(name, commentDetail,timestamp)
{ 
  axios
  .post(`${apiUrl}/comments?api_key=${apiKey}`,
  {
    name:name,
    comment: commentDetail,
    timestamp:timestamp,
  })
  .then (function(response) {
    console.log(response);
    getcomments();
  })
  .catch (function(error){
    console.log(error);
  });   
  const apiUrl = "https://project-1-api.herokuapp.com";
  const apiKey = "1cd68345-f7a4-47d8-bede-96bdbe28fad4";
  function getcomments(){
    axios
    .get(`${apiUrl}/comments?api_key=${apiKey}`)
    .then (function(response) {
      appendArray(response.data);
      console.log()
    })
    .catch (function(error){
      console.log(error);
    });    
  }
  getcomments();
  
  // const productArr = [
    //   {
      //     name: 'Micheal Lyons',
      //     date: '12/18/2018',
      //     commentDescription: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of concert I have EVER witnessed',
      
      //   },
      //   {
        //     name: 'Gary Wong',
        //     date: '12/12/2018',
        //     commentDescription: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        //   },
        //   {
          //     name: 'Theodore Duncan',
          //     date: '11/15/2018',
          //     commentDescription: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
          //   }
          // ];
          
          //  let d = new Date();
          //  displayArray.push({
            //   name: name,
            //   commentDescription: commentDetail,
            //   date:(d.getMonth()+1)+'/'+ d.getDate()+'/'+d.getFullYear()});
            //   appendArray(displayArray);
          }