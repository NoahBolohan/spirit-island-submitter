function on_load() {
    /*
    Stuff to do on app load.
    */
    player_inputs(1);
    adversary_2_event_listener();
}

var createElement = function(type, props) {
    /*
    Create an element of given type and props.
    */
    var $e = document.createElement(type);

    for (var prop in props) {
        $e.setAttribute(prop, props[prop]);
    }

    return $e;
}



function player_inputs(value) {
    /*
    Create input and select elements for the appropriate number of players.
    */
    var names_element = document.getElementById("div_player_names");
    var spirits_element = document.getElementById("div_player_spirits");

    var spirits = [
        "Lightning's Swift Strike",
        "River Surges in Sunlight",
        "Shadows Flicker Like Flame",
        "Vital Strength of Earth",
    ];
    
    var count = parseInt(value) ;
    var input_idx = 1;

    names_element.innerHTML = "";
    spirits_element.innerHTML = "";

    while (input_idx <= count) {
        // Create name input for player ${input_idx}
        names_element.appendChild(
            createElement("input", {name : `player_${input_idx}_name`, type : `player_${input_idx}_name`, placeholder : `Player ${input_idx} name`})
        );

        // Create spirit select for player ${input_idx}
        spirits_element.appendChild(
            createElement("select", {name : `player_${input_idx}_spirit`, id : `player_${input_idx}_spirit`})
        );
        
        // Populate the spirit select element
        spirits_select_element = document.getElementById(`player_${input_idx}_spirit`);

        spirits_select_element.options[0] = new Option(`Select player ${input_idx}'s spirit`, spirits_select_element.options.length);

        for(index in spirits) {
            spirits_select_element.options[spirits_select_element.options.length] = new Option(spirits[index], spirits[index]);
        }
        
        input_idx += 1;
    }
}


function adversary_1_change(value) {
    var adversary_1_level_div = document.getElementById("div_adversary_1_level")

    adversary_1_level_div.innerHTML = "";

    if (value != "No adversary") {
        adversary_1_level_div.appendChild(
            createElement("select", {name : `adversary_1_level`, id : `adversary_1_level`})
        );

        adversary_1_level_select_element = document.getElementById(`adversary_1_level`);

        for(var i = 0; i <= 6; i++) {
            adversary_1_level_select_element.options[adversary_1_level_select_element.options.length] = new Option(i, i);
        }
    }
}

function adversary_2_event_listener() {
    const button  = document.querySelector("#button_adversary_2");
    const content = document.querySelector("#div_adversary_2");

    button.addEventListener("click", function() {
        content.classList.toggle("is_hidden");
    });
}