$(document).ready(function() {
    $.get('http://localhost:3000/abWorkouts', function(data) {
        $('#get-workout').on('click', function() {
            let randomIndex = Math.floor(Math.random() * data.length)
            let name = `<h4>${data[randomIndex].name}</h4>`;
            let description = `<li>${data[randomIndex].description}</li>`;
            let repetitions = `<li> Reps: ${data[randomIndex].repetitions}</li>`;
            let sets = `<li> Sets: ${data[randomIndex].sets}</li>`;
            $paragraph = $('#paragraph');
            $paragraph.append(name);
            $paragraph.append(repetitions);
            $paragraph.append(sets);
            $paragraph.append(description);
        });
    });
});
