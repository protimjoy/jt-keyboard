$('#keyboard').on('click', 'button', function(event) {
    var pressed_button = $(event.target).html();
    total_click++;
    modifyKeyboardInput(pressed_button);
    // calculate distance
    calculateDistanceSetPrevious(previous_input, getInputIndex(pressed_button));
    $('#distance').html(distance.toFixed(2));
    // count word
    countWord();
    kspcCount();
    netWordCount();
});

function netWordCount() 
{
    let sentence = keyboard_input.replace(/ /g,"-");
    let count = $.get('http://dictionary.appointme.xyz/word/' + sentence, function(data) {
        $('#net_word').html(data);
        net_word = data;
    });
}

function calculateNetWordPerMin(time)
{
    let gross_word = keyboard_input.split(/[\s\.\?]+/).length;
    let uncorrect_word = gross_word - net_word;
    nwpm = (gwpm - (uncorrect_word / (time/60)));
    $('#net_word_per_min').html(nwpm > 0 ? nwpm.toFixed(2) : 0);
}

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
            <td>${data[i].gwpm.toFixed(2)}</td>
            <td>${data[i].kspc.toFixed(2)}</td>
            <td>${data[i].nwpm.toFixed(2)}</td>
        </tr>`;
        $('#storage').append(table_data);
    }
});

function countWord()
{
    $('#gross_word').html(keyboard_input.split(/[\s\.\?]+/).length);
}

function kspcCount()
{
    kspc = (total_click / keyboard_input.length);
    $('#kspc').html(keyboard_input.length ? kspc.toFixed(2) : 0);
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
    gwpm = ((length/5)/(time/60));
    $('#gross_word_per_min').html(gwpm ? gwpm.toFixed(2) : 0);
}

function clearAll()
{
    pushDataInStorage();

    keyboard_input = '',
    previous_input = 0,
    distance = 0,
    gwpm = 0;
    kspc = 0;
    net_word = 0;
    nwpm = 0;

    $('#distance').html(distance);
    $('#gross_word_per_min').html(gwpm);
    $('#gross_word').html(gwpm);
    $('#keyboard_output').html('');
    $('#kspc').html(kspc);
    $('#net_word').html(net_word);
    $('#net_word_per_min').html(nwpm);
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
        'gwpm'           : gwpm,
        'keyboard_type'  : keyboard_name,
        'kspc'           : kspc,
        'nwpm'           : nwpm
    });

    localStorage.setItem("keyboard", JSON.stringify(data));

    var table_data = `<tr>
            <td>${keyboard_name}</td>
            <td>${keyboard_input}</td>
            <td>${distance.toFixed(2)}</td>
            <td>${gwpm.toFixed(2)}</td>
            <td>${kspc}</td>
            <td>${nwpm.toFixed(2)}</td>
        </tr>`;
    $('#storage').append(table_data);
}