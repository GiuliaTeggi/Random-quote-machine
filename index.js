var button = document.getElementById("button__quote");
var section = document.getElementById("quote__text"); 
var author = document.getElementById("quote__author"); 
var tweet = document.getElementById("button__tweet");

var url ="https://favqs.com/api/qotd"; 


button.addEventListener("click", function(){ 
var xhr = new XMLHttpRequest();
  
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
      var response =
      JSON.parse(xhr.responseText);
      var quote = response.quote.body; 
      var name = response.quote.author; 
      section.innerHTML = quote; 
      author.innerHTML = "- " + name; 
      tweet.href="https://twitter.com/intent/tweet/?text=" + quote + "</br>" + " - " + name; 
}
  
}; 

xhr.open("GET", url);
xhr.send();

 
}); 
