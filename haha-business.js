setTimeout(function() {
  var items = document.body.querySelectorAll(".nav-item a");
  var index = -1;
  for(var i=0, len=items.length; i<len; i++) {
    if(items[i].innerHTML === "Business") {
      index = i;
    }
  }

  if(index !== -1) {
    items[index].className += " haha--business";
    items[index].innerHTML += "<span class='laugh'>haha!</span>";
  }
},2000);
