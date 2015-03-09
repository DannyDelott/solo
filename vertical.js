$(function(){

  var videos = document.getElementsByTagName('video'); 
  
  /*
   * HELPER FUNCTION
   * Creates and empty <div> of width 'w' with a black background.
   */
  var makeContainer = function(w){
    var container = $('div');
    container.css({
      width: w + 'px',
      background: 'black'
    });

    return container;
  };

  /*
   * EVENT FUNCTION
   * Takes the video element and resize it to swap the dimensions.
   */

  var resize = function(event){
    
    // gets the video and its width
    var vid = $(this);
    var w = vid.innerWidth();
    var h = vid.innerHeight(); 

    // creates a letterbox container
    var container = makeContainer(w); 
    
    // calculates the vertical dimensions
    var verticalRatio = h/w;

    // resizes the video
    vid.css({
      'transform': 'scaleX(' + verticalRatio + ')',
      '-webkit-transform': 'scaleX('+ verticalRatio + ')',
      '-moz-transform': 'scaleX(' + verticalRatio + ')',
      'background': 'black',
    });
    
  };

  for(var i = 0; i < videos.length; i++){
    videos[i].addEventListener('loadedmetadata', resize);
  }

});
