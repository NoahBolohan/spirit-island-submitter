function on_load() {
    /*
    Stuff to do on app load.
    */
    player_inputs(1);
    adversary_2_event_listener();
    adversary_1_level_event_listener();
    adversary_2_level_event_listener();
    scenario_event_listener();
    form_checkbox_listener();
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
        spirits_select_element.options[0].disabled = true;
        spirits_select_element.options[0].value = "";

        spirits_select_element.required = true;

        for(index in spirits) {
            spirits_select_element.options[spirits_select_element.options.length] = new Option(spirits[index], spirits[index]);
        }
        
        input_idx += 1;
    }
}


function adversary_2_level_event_listener() {
    const select  = document.querySelector("#select_adversary_2");
    const content = document.querySelector("#div_adversary_2_level");
    const select_level = document.querySelector("#select_adversary_2_level");

    select.addEventListener("change", function() {
        if (!content.checkVisibility() && select.value != "No adversary") {
            content.classList.toggle("is_hidden");
        }
        else if (content.checkVisibility() && select.value == "No adversary") {
            content.classList.toggle("is_hidden");
        }

        select_level.value = "0";
    });
}

function adversary_2_event_listener() {
    const button  = document.querySelector("#button_adversary_2");
    const content = document.querySelector("#div_adversary_2");

    button.addEventListener("click", function() {
        content.classList.toggle("is_hidden");
    });
}

function scenario_event_listener() {
    const button  = document.querySelector("#button_scenario");
    const content = document.querySelector("#div_scenario");
    const select_scenario = document.querySelector("#select_scenario");

    button.addEventListener("click", function() {
        select_scenario.value = "Select a scenario";
        content.classList.toggle("is_hidden");
    });
}

function checkForm() {
    var e=document.getElementById("text_invader_cards_in_deck").value;//alert(e);
    if(e===""){
        alert("nothing selected");
        return false;
    }
}

function form_checkbox_listener() {
    document.getElementById("googleform").addEventListener("submit", () => {
        if(document.getElementById("checkbox_win").checked) {
            document.getElementById("checkbox_win_hidden").disabled = true;
        }
    });
}