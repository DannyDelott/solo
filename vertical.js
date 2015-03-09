$(function(){

  var videos = document.getElementsByTagName('video'); 
  
  var makeContainer = function(w){
    var container = $('div');
    container.css({
      width: w + 'px',
      background: 'black'
    });

    return container;
  };

  var resize = function(event){
    var vid = $(this);

    var h = vid.innerHeight();
    var w = vid.innerWidth();
    var container = makeContainer(w); 
    
    var dim = h/w;
    console.log(dim);

    vid.css('transform', 'scaleY(' + dim + ')');
    vid.css('-webkit-transform','scaleY('+ dim + ')');
    vid.css('-moz-transform','scaleY(' + dim + ')');
    vid.css('transform', 'scaleX(' + dim + ')');
    vid.css('-webkit-transform','scaleX('+ dim + ')');
    vid.css('-moz-transform','scaleX(' + dim + ')');
    vid.css('background','black');
    vid.css('object-fit','none');

    console.log(vid.height()); 
    console.log(vid.width());
  };

  for(var i = 0; i < videos.length; i++){
    videos[i].addEventListener('loadedmetadata', resize);
  }

});
