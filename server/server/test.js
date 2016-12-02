$(document).ready(function(){
  $.get('http://localhost:3000/abWorkouts',function(data){
    console.log(data)
  })
})
