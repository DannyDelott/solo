$(function(){

  var videos = document.getElementsByTagName('video'); 

  /*
   * HELPER FUNCTION
   * Creates and empty <div> of width 'w' with a black background.
   */
  var makeContainer = function(w, h){
    return '<div style="width:' + w + 'px; height:' + h + 'px; background: black;"></div>';
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
    var container = makeContainer(w, h); 
    
    // calculates the vertical dimensions
    var verticalRatio = h/w/1.3;

    // resizes the video
    vid.css({
      'transform': 'scaleX(' + verticalRatio + ')',
      '-webkit-transform': 'scaleX('+ verticalRatio + ')',
      '-moz-transform': 'scaleX(' + verticalRatio + ')',
    });
   
    // add video to container
   vid.wrap(container); 

  };

  for(var i = 0; i < videos.length; i++){
    videos[i].addEventListener('loadedmetadata', resize);
  }

});
