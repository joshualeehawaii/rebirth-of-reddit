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

    //This is the container for the image
    var boardImage = document.createElement('img');
    boardImage.className = 'image';
    boardImage.src = result.data.children[i].data.url;
    boardContainer.appendChild(boardImage);

    //This is the container for the title
    var boardTitle = document.createElement('div');
    boardTitle.className = 'title';
    boardTitle.innerHTML = result.data.children[i].data.title;
    boardContainer.appendChild(boardTitle);

    //This is the container for the author
    var boardAuthor = document.createElement('div');
    boardAuthor.className = 'author';
    boardAuthor.innerHTML = 'By' + ' ' + result.data.children[i].data.author;
    boardContainer.appendChild(boardAuthor);

    //this is the container for the text
    // var boardtext = document.createElement ('p');
    // boardtext.className = 'text';
    // boardtext.innerHTML = result.data.children[i].data.selftext;
    // boardContainer.appendChild(boardtext);
    }
  }
}
