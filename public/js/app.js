console.log('sanity check');

//This is the intial request for data from reddit
var dataRequest = new XMLHttpRequest();
dataRequest.addEventListener('load', redditData);
dataRequest.open('GET', `https://www.reddit.com/r/batman/.json`);
dataRequest.send();

var logo = document.createElement('img');
logo.id = 'logo';
logo.src = '../assets/logo.svg';
header.appendChild(logo);

//This function takes the result from the request and using a for loop, appends the data to the DOM
function redditData(){
  var result = JSON.parse(this.responseText);
  console.log('*** this is result', result);
  //console.log('*** this is result.data', result.data);
  //console.log('*** this is result.children', result.data.children);

   for (var i = 0; i < result.data.children.length; i++){
     console.log('*** this is result after the loop', result.data.children[i]);
     if (result.data.children[i].data.post_hint === 'image'){
     //console.log(result.data.children[i].data.post_hint);
     //console.log(result.data.children[i].data.url);
     //this is the container for the boards

     //This is the main div where all the data is placed
     var boardContainer = document.createElement('div');
     boardContainer.className = 'boards';
     main.appendChild(boardContainer);

     //This is the the image
     var imageContainer = document.createElement('div');
     imageContainer.className = 'imageContainer';
     imageContainer.src = result.data.children[i].data.url;
     boardContainer.appendChild(imageContainer);

     //This is the the image
     var boardImage = document.createElement('img');
     boardImage.className = 'image';
     boardImage.src = result.data.children[i].data.url;
     imageContainer.appendChild(boardImage);

     //This is the container for the title
     var boardTitle = document.createElement('div');
     boardTitle.className = 'title';
     boardTitle.innerHTML = result.data.children[i].data.title;
     boardContainer.appendChild(boardTitle);

     //This is the container for the author and views
     var boardData = document.createElement('div');
     boardData.className = 'data';
     boardData.innerHTML = 'By' + ' ' + result.data.children[i].data.author + ' - ' + 'Views' + ' ' + result.data.children[i].data.score;
     boardContainer.appendChild(boardData);

     var dateContainer = document.createElement('div');
     dateContainer.className = 'date';
     var timeStamp = new Date(result.data.children[i].data.created * 1000);
     var hours = timeStamp.getHours();
     dateContainer.innerHTML = hours + ' '+ 'hours ago';
     boardContainer.appendChild(dateContainer);

     var text = document.createElement('div');
     text.className = 'text';
     text.innerHTML = 'subreddit:' + ' ' + result.data.children[i].data.subreddit;
     boardContainer.appendChild(text);

    }
  }
}

