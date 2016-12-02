$(document).ready(function() {
    $.get('http://localhost:3000/abWorkouts', function(data) {
        $('#get-workout').click(function() {
            $paragraph = $('#paragraph')
            let name = `<h4>${data[0].name}</h4>`;
            let description = `<li>${data[0].description}</li>`;
            let repetitions = `<li> Reps: ${data[0].repetitions}</li>`;
            let sets = `<li> Sets: ${data[0].sets}</li>`;
            $paragraph.append(name)
            $paragraph.append(description)
            $paragraph.append(repetitions)
            $paragraph.append(sets)
        });


    })
})

function showWorkout(data) {
    console.log(data);
}
//
// $('#get-workout').click(function()
//
// );
