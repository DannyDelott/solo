$(function(){
  var videos = Array.prototype.slice.call(document.getElementsByTagName('video')); 

  /*
   * HELPER FUNCTIONS
   */
  var makeContainer = function(dimensions){
    return '<div class="verticaljs"></div>';
  };
  var makeLeftBar = function(){};
  var makeRightBar = function(){};

  var getDimensions = function($video){
    return [$video.innerWidth(), $video.innerHeight()];
  };

  /*
   * EVENT FUNCTION
   * Takes the video element and resize it to swap the dimensions.
   */
  var overlay = function(event){
    
    // gets the video and its dimensions 
    var $vid = $(this);
    var dimensions = getDimensions($vid);
    
    // creates a letterbox container
    var container = makeContainer(dimensions); 
    
    // calculates the vertical dimensions
    var verticalRatio = (dimensions[1] / dimensions[0]) / 1.3;

   
    // add video to container
   $vid.wrap(container); 

   $('.verticaljs').prepend('<div>');

  };

  /*
   * DEFAULT CODE
   * Loops through all the video elements and resizes them.
   */
    for(var i = 0; i < videos.length; i++){
      videos[i].addEventListener('loadedmetadata', overlay);
    }

});
