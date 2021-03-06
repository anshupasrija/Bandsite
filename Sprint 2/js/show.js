"use strict";
const showList = [
    {
      date: "Mon Dec 17 2018",
      venue: "Ronald Lane",
      location:"San Fancisco, CA",
    },
    {
        date: "Tue Jul 18 2019",
      venue: "Pier 3 East",
      location:"San Fancisco, CA",
    },
    {
        date: "Fri Jul 22 2019",
        venue: "View Loungue",
        location:"San Fancisco, CA",
    },
    {
      date: "Sat Aug 12 2019",
      venue: "Hyatt Agency",
      location:"San Fancisco, CA",
  },
  {
    date: "Fri Sep 05 2019",
    venue: "Moscow Center",
    location:"San Fancisco, CA",
},
{
  date: "Wed Aug 11 2019",
  venue: "Pres Club",
  location:"San Fancisco, CA",
}


  ];
const showDetails =document.getElementById('label1-id');

function dateList()
{
    for(let i=0;i<showList.length;i++)
    {
        const showObject= showList[i];
        const showListItem = document.createElement("li");
        showListItem.classList.add("list1-item");    
        const showListHeading= document.createElement("h4");
        showListHeading.classList.add("showDateLabel"); 
        showListHeading.innerText="date";
        const showParagraph= document.createElement("h3");
        showParagraph.classList.add("showList__paragraph");
        showParagraph.innerText=showObject.date;
        // console.log(showListHeading, showParagraph); 
        // const showVenue=document.createElement('li');
        // showVenue.classList.add("showVenue");
        const showVenueLabel=document.createElement('h4');
        showVenueLabel.classList.add("showVenueLabel");
        showVenueLabel.innerText="venue";
        const showVenueParagraph=document.createElement('p');
        showVenueParagraph.classList.add("showVenueParagraph");
        showVenueParagraph.innerText=showObject.venue;
        // console.log( showVenueLabel,showVenueParagraph);
        const showLocationLabel=document.createElement('h4');
        showLocationLabel.classList.add("showLocationLabel");
        showLocationLabel.innerText="location";        
        // console.log(showLocationLabel);
        const showLocationParagraph=document.createElement('p');
        showLocationParagraph.classList.add("showLocationParagraph");
        showLocationParagraph.innerText=showObject.location;
        // console.log(showLocationParagraph);  
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
dateList();
