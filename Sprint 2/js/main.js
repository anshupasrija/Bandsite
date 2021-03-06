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

const productArr = [
  {
    name: 'Micheal Lyons',
    date: '12/18/2018',
    commentDescription: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of concert I have EVER witnessed',

  },
  {
    name: 'Gary Wong',
    date: '12/12/2018',
    commentDescription: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
  },
  {
    name: 'Theodore Duncan',
    date: '11/15/2018',
    commentDescription: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
  }
];

function appendArray() {
 
  for (let i = 0; i < productArr.length; i++) {
    // formUl.innerHTML = "";
    const productObj = productArr[i];
    const nameList = document.createElement('li');
    nameList.classList.add("nameList");
    // const nameLabel=document.createElement('p');
    // nameLabel.classList.add("nameLabel");
    // nameLabel.innerText="Name";
    const nameListElem = document.createElement('h4');
    nameListElem.classList.add("nameListElem");
    nameListElem.innerText = productObj.name;
    // console.log(nameListElem);
    const dateListItem = document.createElement('p');
    dateListItem.classList.add("dateListItem");
    dateListItem.innerText = productObj.date;
    // console.log(dateListItem);
    const commentDescriptionList = document.createElement('p');
    commentDescriptionList.classList.add("commentDescription");
    commentDescriptionList.innerText = productObj.commentDescription;
    // console.log(commentDescriptionList);
    // nameList.appendChild(nameLabel);
    nameList.appendChild(nameListElem);
    nameList.appendChild(dateListItem);
    nameList.appendChild(commentDescriptionList);
    commentForm.appendChild(nameList);
    // productArr.sort(function (a, b) {
    // console.log(new Date(b.publishedDate) - new Date(a.publishedDate));
    //   return new Date(b.dateListItem) - new Date(a.dateListItem);
    // });
  }
}

appendArray(); 


function appendForm(name, commentDetail)
 { 
 let d = new Date();
  productArr.push({
    
    name: name,
    commentDescription: commentDetail,
    date:(d.getMonth()+1)+'/'+ d.getDate()+'/'+d.getFullYear()
  });
  // productArr.sort(function (a, b) {
  // // console.log(new Date(b.publishedDate) - new Date(a.publishedDate));
  //   return new Date(b.dateListItem) - new Date(a.dateListItem);
  // });
  appendArray();
}


