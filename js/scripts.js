// Populate the player info divs
$(document).ready(
    function() {

        $.getJSON('https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/refs/heads/master/data/config.json', function(data) {
            // Spirits from which players select
            var spirits = data["spirits"];

            // Populate divs for each player
            for (var i=1; i <= 4; i++) {

                // Player name text input
                $('<input type="text" />').attr(
                    {
                        name : `player_${i}_name`,
                        type : `player_${i}_name`,
                        placeholder : `Player ${i} name (optional)`
                    }
                ).appendTo(`#div_player_${i}_name`);

                // Player spirit select
                var spirit_select = $('<select>').attr(
                    {
                        name : `player_${i}_spirit`,
                        id : `player_${i}_spirit`
                    }
                ).prop('required',true).appendTo(`#div_player_${i}_spirit`);

                // Append the disabled default option
                spirit_select.append(
                    $("<option>", {
                        value: "",
                        text: `Select player ${i}'s spirit`,
                        disabled : true
                    }
                    )
                );

                // Append the spirit options
                $(spirits).each(
                    function() {
                        spirit_select.append(
                            $("<option>").text(this)
                        );
                    }
                );

                // Reset the select to the first option
                $(`#player_${i}_spirit`).prop('selectedIndex',0);

                // Hide columns for players 2+
                if (i > 1) {
                    spirit_select.prop('required',false);
                    $(`#col_player_${i}_info`).hide();
                }
            }
        });

        // // Spirits from which players select
        // var spirits = [
        //     {text : "Lightning's Swift Strike"},
        //     {text : "River Surges in Sunlight"},
        //     {text : "Shadows Flicker Like Flame"},
        //     {text : "Vital Strength of Earth"},
        // ];

        // // Populate divs for each player
        // for (var i=1; i <= 4; i++) {

        //     // Player name text input
        //     $('<input type="text" />').attr(
        //         {
        //             name : `player_${i}_name`,
        //             type : `player_${i}_name`,
        //             placeholder : `Player ${i} name (optional)`
        //         }
        //     ).appendTo(`#div_player_${i}_name`);

        //     // Player spirit select
        //     var spirit_select = $('<select>').attr(
        //         {
        //             name : `player_${i}_spirit`,
        //             id : `player_${i}_spirit`
        //         }
        //     ).prop('required',true).appendTo(`#div_player_${i}_spirit`);

        //     // Append the disabled default option
        //     spirit_select.append(
        //         $("<option>", {
        //             value: "",
        //             text: `Select player ${i}'s spirit`,
        //             disabled : true
        //         }
        //         )
        //     );

        //     // Append the spirit options
        //     $(spirits).each(
        //         function() {
        //             spirit_select.append(
        //                 $("<option>").text(this.text)
        //             );
        //         }
        //     );

        //     // Reset the select to the first option
        //     $(`#player_${i}_spirit`).prop('selectedIndex',0);

        //     // Hide columns for players 2+
        //     if (i > 1) {
        //         spirit_select.prop('required',false);
        //         $(`#col_player_${i}_info`).hide();
        //     }
        // }
    }
)

// Set an event listener for showing player info divs by choosing the number of players
$(document).ready(
    function() {
        $("#select_n_players").on(
            "change",
            function() {
                for (var i=1; i<=4; i++) {
                    // Show columns for players <= this.value
                    if (i <= this.value) {
                        $(`#player_${i}_spirit`).prop("required",true);
                        $(`#col_player_${i}_info`).show();
                    }
                    // Hide columns for players > this.value
                    else {
                        $(`#player_${i}_spirit`).prop("required",false);
                        $(`#col_player_${i}_info`).hide();
                        $(`#player_${i}_spirit`).prop('selectedIndex',0);
                    }
                }
            }
        )
    }
)

// Set an event listener for showing adversary 1 level by choosing an adversary 1
$(document).ready(
    function() {
        $("#select_adversary_1").on(
            "change",
            function() {
                // Show adversary 1 level select if this.value changed to an adversary
                if ($("#div_adversary_1_level").is(":hidden") && this.value != "No adversary") {
                    $("#div_adversary_1_level").show();
                }
                // Hide adversary 1 level select if this.value changed to "No adversary"
                else if ($("#div_adversary_1_level").is(":visible") && this.value == "No adversary") {
                    $("#div_adversary_1_level").hide();
                }
                // Reset the adversary 1 level select
                $("#select_adversary_1_level").val("0").change();
            }
        )
    }
)

// Set an event listener for showing adversary 2 options by toggling the adversary 2 button
$(document).ready(
    function() {
        $("#button_adversary_2").on(
            "click",
            function() {
                $("#div_adversary_2").toggle();
            }
        )
    }
)

// Set an event listener for showing adversary 2 level by choosing an adversary 2
$(document).ready(
    function() {
        $("#select_adversary_2").on(
            "change",
            function() {
                // Show adversary 2 level select if this.value changed to an adversary
                if ($("#div_adversary_2_level").is(":hidden") && this.value != "No adversary") {
                    $("#div_adversary_2_level").show();
                }
                // Hide adversary 2 level select if this.value changed to no adversary
                else if ($("#div_adversary_2_level").is(":visible") && this.value == "No adversary") {
                    $("#div_adversary_2_level").hide();
                }
                // Reset the adversary 2 level select
                $("#select_adversary_2_level").val("0").change();
            }
        )
    }
)

// Set an event listener for showing scenario options by toggling the scenario button
$(document).ready(
    function() {
        $("#button_scenario").on(
            "click",
            function() {
                $("#div_scenario").toggle();
                $('#select_scenario').prop('selectedIndex',0);
            }
        )
    }
)

// Set an event listener for checking the victory checkbox on submit
$(document).ready(
    function() {
        $("#google_form").on(
            "submit",
            function() {
                if(document.getElementById("checkbox_win").checked) {
                    document.getElementById("checkbox_win_hidden").disabled = true;
                }
            }
        )
    }
)