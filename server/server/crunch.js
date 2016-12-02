var express = require('express');
var cors = require("cors")
var app = express();
app.use(cors());
app.listen(3000, function(){
  console.log("listening on port 3000")
})


var abWorkouts = [{
         name:"Russian Twists",
  description:"Hold a weight with both arms for resistance. Twist your torso to the right side until your arms are parallel with the floor.Move back to the starting position and then move to the opposite side.",
  repetitions:10,
         sets:2,
           id:"one"

},
{
         name:"Kettlebell Windmills",
  description:"Bend your hip to one side. Slowly lean until can touch the floor with your free hand. The kettlebell should be held over your head at all times.Reverse the motion and repeat.",
  repetitions:8,
         sets:2,
          id:"two"

},

{
         name:"Hanging Leg Raises",
  description:"Hanging from a chin-up bar, raise your legs until your legs and torso from a 90-degree angle.",
  repetitions:7,
         sets:3,
          id:"three"

},
{
         name:"Gorilla Chin/Crunch",
  description:"Here, hang from a chin-up bar with an underhand grip. Bend your knees to a 90-degree angle and pull yourself up while crunching.Finish the crunch when your nose reaches the same level as the bar.",
  repetitions:5,
         sets:2,
          id:"four"

},
{
         name:"Barbell Ab Rollouts",
  description:" Place a barbell, loaded with 5-or-10-pound plates, on the floor in front of you so that you are on your hands and knees (as in a kneeling push-up position). This will be your starting position. Grip the barbell with both hands shoulder width apart. Slowly roll the bar forward, stretching your body into a straight position. After a pause at the stretched position, pull yourself back to the starting position as you breathe out.",
  repetitions:5,
         sets:3,
          id:"five"

},
{
         name:"Cable Crunches",
  description:"Kneel below a high pulley that contains a rope attachment. Grasp cable rope attachment and lower the rope until your hands are placed next to your face. Flex your hips slightly and allow the weight to hyperextend the lower back. With the hips stationary, flex the waist as you contract the abs so that the elbows travel toward the middle of the thighs. Exhale as you perform this portion of the movement and hold the contraction for a second.Slowly return to the starting position as you inhale.",
  repetitions:5,
         sets:3,
          id:"six"

},
{
         name:"Side Jackknifes",
  description:"Lying on your right side and keeping your left leg over your right one, place your right hand in a comfortable spot and clasp your left hand behind your head.Bring your torso and left leg toward each other as you pull with your obliques.Squeeze for a moment and return to the starting position. Not tough enough? Strap on some ankle weights!",
  repetitions:5,
         sets:3,
          id:"seven"

},
{
         name:"Exercise Ball Pull-in",
  description:"Place your lower shins on top of an exercise ball and stand in push-up position with your hands shoulder width apart.Pull your knees in toward your chest while keeping your back straight.Straighten your legs by rolling the ball back to get into starting position.",
  repetitions:5,
         sets:3,
          id:"eight"

}]

app.get("/abWorkouts",function(req,res){
  res.json(abWorkouts)
});
