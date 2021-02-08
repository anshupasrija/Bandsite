"use strict";
const showDetails =document.getElementById('label1-id');

function dateList(showList)
{
  for(let i=0;i<showList.length;i++)
  {
    const showObject= showList[i];
    const showListItem = document.createElement("li");
    showListItem.classList.add("list1-item");    
    const showListHeading= document.createElement("h4");
    showListHeading.classList.add("show__datelabel"); 
    showListHeading.innerText="date";
    const showParagraph= document.createElement("h4");
    showParagraph.classList.add("show__listparagraph");
    showParagraph.innerText=showObject.date;    
    const showVenueLabel=document.createElement('h4');
    showVenueLabel.classList.add("show__venuelabel");
    showVenueLabel.innerText="place";
    const showVenueParagraph=document.createElement('p');
    showVenueParagraph.classList.add("show__venueparagraph");
    showVenueParagraph.innerText=showObject.place; 
    const showLocationLabel=document.createElement('h4');
    showLocationLabel.classList.add("show__locationlabel");
    showLocationLabel.innerText="location";          
    const showLocationParagraph=document.createElement('p');
    showLocationParagraph.classList.add("show__locationparagraph");
    showLocationParagraph.innerText=showObject.location;    
    const button=document.createElement("button");
    button.classList.add('button1');
    button.innerText="BUY TICKETS";               
    showListItem.appendChild(showListHeading);
    showListItem.appendChild(showParagraph);
    showListItem.appendChild(showVenueLabel);
    showListItem.appendChild(showVenueParagraph);
    showListItem.appendChild(showLocationLabel);
    showListItem.appendChild(showLocationParagraph);
    showListItem.appendChild(button);
    showDetails.appendChild(showListItem);  
  }
}    

const apiUrl = "https://project-1-api.herokuapp.com";
const apiKey = "1cd68345-f7a4-47d8-bede-96bdbe28fad4";
function getdates(){
  axios
  .get(`${apiUrl}/showdates?api_key=${apiKey}`)
  .then (function(response) {
    dateList(response.data);
    console.log()
  })
  .catch (function(error){
    console.log(error);
  });    
}
getdates();
