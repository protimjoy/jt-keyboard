$('#keyboard').on('click', 'button', function(event) {
    var pressed_button = $(event.target).html();
    modifyKeyboardInput(pressed_button);
    // calculate distance
    calculateDistanceSetPrevious(previous_input, getInputIndex(pressed_button));
    $('#distance').html(distance.toFixed(2));
    // count word
    countWord();
});

$(document).ready(function() {
    var data = localStorage.getItem("keyboard");
    if(data == null) data = [];
    else data = JSON.parse(data);
    
    for(i in data)
    {
        var table_data = `<tr>
            <td>${data[i].keyboard_type}</td>
            <td>${data[i].keyboard_input}</td>
            <td>${data[i].distance.toFixed(2)}</td>
            <td>${data[i].nwpm.toFixed(2)}</td>
        </tr>`;
        $('#storage').append(table_data);
    }
});

function countWord()
{
    $('#net_word').html(keyboard_input.split(/[\s\.\?]+/).length);
}

function modifyKeyboardInput(pressed_button)
{
    if(pressed_button.length == 1 && (pressed_button >= 'A' && pressed_button <= 'Z'))
        keyboard_input += pressed_button;
    else if(pressed_button == 'Space')
        keyboard_input += ' ';
    else 
        keyboard_input =  keyboard_input.slice(0, -1);

    $('#keyboard_output').html(keyboard_input);
}

function calculateDistanceSetPrevious(previous, current_input)
{
    distance += distance_matrix[previous_input][current_input];
    previous_input = current_input;
}

function getInputIndex(pressed_button)
{
    if(pressed_button.length == 1 && (pressed_button >= 'A' && pressed_button <= 'Z'))
        return pressed_button.charCodeAt(0) - 64;
    else if(pressed_button == 'Space')
        return 27;
    else 
        return 28;
}

function calculateWordPerMin(time)
{
    var length =  keyboard_input.replace(/ /g,"").length;
    nwpm = ((length/5)/(time/60));
    $('#net_word_per_min').html(nwpm ? nwpm.toFixed(2) : 0);
}

function clearAll()
{
    pushDataInStorage();

    keyboard_input = '',
    previous_input = 0,
    distance = 0,
    nwpm = 0;

    $('#distance').html(distance);
    $('#net_word_per_min').html(nwpm);
    $('#net_word').html(nwpm);
    $('#keyboard_output').html('');
}

function pushDataInStorage() 
{
    if (keyboard_input == '') return ;
    var data = localStorage.getItem("keyboard");
    if(data == null) data = [];
    else data = JSON.parse(data);
    
    data.push({
        'keyboard_input' : keyboard_input,
        'distance'       : distance,
        'nwpm'           : nwpm,
        'keyboard_type'  : keyboard_name
    });

    localStorage.setItem("keyboard", JSON.stringify(data));

    var table_data = `<tr>
            <td>${keyboard_name}</td>
            <td>${keyboard_input}</td>
            <td>${distance.toFixed(2)}</td>
            <td>${nwpm.toFixed(2)}</td>
        </tr>`;
    $('#storage').append(table_data);
}