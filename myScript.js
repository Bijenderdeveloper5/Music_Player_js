

let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrl_icon = document.getElementById('ctrl_icon');


//   onloadeddata is used for handling media elements when audio or video file, has been loaded.
//  .max property is used to find the maximum value
//  .duration property is commonly used to retrieve the duration of media elements such as audio or video files.


song.onloadedmetadata = function (){
    progress.max = song.duration;
    progress.value = song.currentTime;
    
}
// 

// playPause function is used to change the play and pause button .And according to that song will we played and pause..


function playPause(on){
if(on == 0){
    song.play();
     let playPause = document.getElementById('pause_btn').style.display = 'block';
     let ctrl = document.getElementById('ctrl_icon').style.display = 'none';

} else if(on == 1){ 
    song.pause(); 
   let playPause = document.getElementById('pause_btn').style.display = 'none';
   let ctrl = document.getElementById('ctrl_icon').style.display = 'block';
  }

}

// this function is used to moving the progress bar     
// => setInterval is used to run the function continously refreshing the code with in 500 mili second. 


if(song.play()){

    setInterval(()=>{
        progress.value = song.currentTime;
    },500)


}


// clicking on the progress bar u can forward or backward the song. Play and pause button also change.
progress.onchange =function(){
    song.play();
    song.currentTime = progress.value;
    document.getElementById('pause_btn').style.display = 'block';
    document.getElementById('ctrl_icon').style.display = 'none';

}

