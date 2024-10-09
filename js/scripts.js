// Populate the player info divs
$(document).ready(
    function() {

        $.getJSON('https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/refs/heads/master/data/config.json', function(data) {
            // Spirits from which players select
            var spirits = data["spirits"];

            // Populate divs for each player
            for (var i=1; i <= 4; i++) {

                $(
                    "<div>",
                    {
                        class : "border col-6",
                        id : `col_player_${i}_info`,
                        name : `player_${i}_info`,
                        
                    }
                ).appendTo("#row_player_info");
                

                // Player name text input
                $(
                    "<input>",
                    {
                        class : "row border",
                        id : `row_input_player_${i}_name`,
                        name : `player_${i}_name`,
                        type : "text",
                        placeholder : `Player ${i} name`
                    }
                ).appendTo(`#col_player_${i}_info`);

                // Player spirit select
                var spirit_select = $(
                    '<select>',
                    {
                        class : "row border",
                        id : `row_select_player_${i}_spirit`,
                        name : `player_${i}_spirit`,
                        
                    }
                ).prop(
                    'required',
                    true
                ).appendTo(`#col_player_${i}_info`);

                // Append the disabled default option
                spirit_select.append(
                    $(
                        "<option>",
                            {
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
                $(`#row_select_player_${i}_spirit`).prop('selectedIndex',0);

                // Append the spirit img
                $(
                    "<img>",
                    {
                        class : "border col-6 is_hidden",
                        id : `row_player_${i}_spirit_image`
                    }
                ).appendTo(`#col_player_${i}_info`);

                // Hide columns for players 2+
                if (i > 1) {
                    spirit_select.prop(
                        'required',
                        false
                    );
                    $(`#row_input_player_${i}_info`).hide();
                    $(`#row_input_player_${i}_name`).hide();
                    $(`#row_select_player_${i}_spirit`).hide();
                    $(`#col_player_${i}_info`).hide();
                }
            }
        });
    }
)

// Set an event listener for showing player info divs by choosing the number of players
$(document).ready(
    function() {
        $("#col_select_n_players").on(
            "change",
            function() {
                for (var i=1; i<=4; i++) {
                    // Show columns for players <= this.value
                    if (i <= this.value) {
                        $(`#row_select_player_${i}_spirit`).prop(
                            "required",
                            true
                        );
                        $(`#row_input_player_${i}_name`).show();
                        $(`#row_select_player_${i}_spirit`).show();
                        $(`#col_player_${i}_info`).show();
                    }
                    // Hide columns for players > this.value
                    else {
                        $(`#row_select_player_${i}_spirit`).prop(
                            "required",
                            false
                        );
                        $(`#row_select_player_${i}_spirit`).prop(
                            'selectedIndex',
                            0
                        );
                        $(`#row_input_player_${i}_name`).hide();
                        $(`#row_select_player_${i}_spirit`).hide();
                        $(`#row_player_${i}_spirit_image`).hide();
                        $(`#col_player_${i}_info`).hide();
                    }
                }
            }
        )
    }
)

// Set an event listener for showing player 1's spirit choice image by choosing a spirit for player 1
$(document).ready(
    $(document).on(
        "change",
        "#row_select_player_1_spirit",
        function() {
            $("#row_player_1_spirit_image").attr(
                "src",
                `https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/master/static/${$("#row_select_player_1_spirit").val().split(' ').join('_')}.png`
            );
            $("#row_player_1_spirit_image").show();
        }
    )
)

// Set an event listener for showing player 2's spirit choice image by choosing a spirit for player 2
$(document).ready(
    $(document).on(
        "change",
        "#row_select_player_2_spirit",
        function() {
            $("#row_player_2_spirit_image").attr(
                "src",
                `https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/master/static/${$("#row_select_player_2_spirit").val().split(' ').join('_')}.png`
            );
            $("#row_player_2_spirit_image").show();
        }
    )
)

// Set an event listener for showing player 3's spirit choice image by choosing a spirit for player 3
$(document).ready(
    $(document).on(
        "change",
        "#row_select_player_3_spirit",
        function() {
            $("#row_player_3_spirit_image").attr(
                "src",
                `https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/master/static/${$("#row_select_player_3_spirit").val().split(' ').join('_')}.png`
            );
            $("#row_player_3_spirit_image").show();
        }
    )
)

// Set an event listener for showing player 4's spirit choice image by choosing a spirit for player 4
$(document).ready(
    $(document).on(
        "change",
        "#row_select_player_4_spirit",
        function() {
            $("#row_player_4_spirit_image").attr(
                "src",
                `https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/master/static/${$("#row_select_player_4_spirit").val().split(' ').join('_')}.png`
            );
            $("#row_player_4_spirit_image").show();
        }
    )
)

// Set an event listener for showing adversary 1 level by choosing an adversary 1
$(document).ready(
    function() {
        $("#col_select_adversary_1").on(
            "change",
            function() {
                // Show adversary 1 level select if this.value changed to an adversary
                if ($("#col_select_adversary_1_level").is(":hidden") && this.value != "No adversary") {
                    $("#col_select_adversary_1_level").show();
                }
                // Hide adversary 1 level select if this.value changed to "No adversary"
                else if ($("#col_select_adversary_1_level").is(":visible") && this.value == "No adversary") {
                    $("#col_select_adversary_1_level").hide();
                }
                // Reset the adversary 1 level select
                $("#col_select_adversary_1_level").val("0").change();
            }
        )
    }
)

// Set an event listener for showing adversary 2 options by toggling the adversary 2 button
$(document).ready(
    function() {
        $("#col_button_adversary_2").on(
            "click",
            function() {
                $("#col_select_adversary_2").toggle();
                $("#col_select_adversary_2_level").hide();
                $("#col_select_adversary_2_level").val("0").change();
            }
        )
    }
)

// Set an event listener for showing adversary 2 level by choosing an adversary 2
$(document).ready(
    function() {
        $("#col_select_adversary_2").on(
            "change",
            function() {
                // Show adversary 2 level select if this.value changed to an adversary
                if ($("#col_select_adversary_2_level").is(":hidden") && this.value != "No adversary") {
                    $("#col_select_adversary_2_level").show();
                }
                // Hide adversary 2 level select if this.value changed to no adversary
                else if ($("#col_select_adversary_2_level").is(":visible") && this.value == "No adversary") {
                    $("#col_select_adversary_2_level").hide();
                }
                // Reset the adversary 2 level select
                $("#col_select_adversary_2_level").val("0").change();
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
                $("#col_select_scenario").toggle();
                $('#col_select_scenario').prop(
                    "selectedIndex",
                    0
                );
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