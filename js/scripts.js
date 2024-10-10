// Populate the player info divs
$(document).ready(
    function() {

        $.getJSON('https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/refs/heads/master/data/config.json', function(data) {
            // Populate divs for each player
            for (var i=1; i <= data["max_players"]; i++) {

                // Player ${i} column
                $("<div>").attr(
                    {
                        class : "col-6 p-1",
                        id : `col_player_${i}_info`,
                        name : `player_${i}_info`,
                        
                    }
                ).appendTo("#row_player_info");

                // Player ${i} header text row
                $("<div>").attr(
                    {
                        class : "row",
                        id : `row_player_${i}_header`,
                        
                    }
                ).appendTo(`#col_player_${i}_info`);

                // Player ${i} header text
                $("<div>").attr(
                    {
                        class : "col text-center",
                        id : `col_player_${i}_header`,
                        
                    }
                ).appendTo(`#row_player_${i}_header`);

                $(`#col_player_${i}_header`).text(
                    `Player ${i}`
                );
                
                // Player name row
                $("<div>").attr(
                    {
                        class : "row justify-content-center",
                        id : `row_player_${i}_name`,
                    }
                ).appendTo(`#col_player_${i}_info`);

                // Player name display text
                $("<div>").attr(
                    {
                        class : "col-3 m-1",
                        id : `row_player_${i}_name_display_text`,
                    }
                ).appendTo(`#row_player_${i}_name`);

                $(`#row_player_${i}_name_display_text`).text(
                    "Name:"
                );

                // Player name text input
                $("<input>").attr(
                    {
                        class : "col-7 m-1",
                        id : `col_input_player_${i}_name`,
                        name : `player_${i}_name`,
                        type : "text",
                        placeholder : `Player 1`
                    }
                ).appendTo(`#row_player_${i}_name`);

                // Player board row
                $("<div>").attr(
                    {
                        class : "row justify-content-center",
                        id : `row_player_${i}_board`,
                    }
                ).appendTo(`#col_player_${i}_info`);

                // Player board display text
                $("<div>").attr(
                    {
                        class : "col-3 m-1",
                        id : `row_player_${i}_board_display_text`,
                    }
                ).appendTo(`#row_player_${i}_board`);

                $(`#row_player_${i}_board_display_text`).text(
                    "Board:"
                );

                // Player board select
                var board_select = $("<select>").attr(
                    {
                        class : "col-7 m-1",
                        id : `col_select_player_${i}_board`,
                        name : `player_${i}_board`
                    }
                ).prop(
                    'required',
                    true
                ).appendTo(`#row_player_${i}_board`);

                // Append the disabled default option
                board_select.append(
                    $("<option>").attr(
                            {
                            value: "",
                            disabled : true
                        }
                    ).text(`Select board`)
                );

                // Append the board options
                $(data["boards"]).each(
                    function() {
                        board_select.append(
                            $("<option>").text(this)
                        );
                    }
                );

                // Reset the select to the first option
                $(`#col_select_player_${i}_board`).prop('selectedIndex',0);

                // Player name and board row
                $("<div>").attr(
                    {
                        class : "row justify-content-center",
                        id : `row_input_player_${i}_spirit`,
                    }
                ).appendTo(`#col_player_${i}_info`);

                // Player spirit select
                var spirit_select = $("<select>").attr(
                    {
                        class : "col-11 m-1",
                        id : `col_select_player_${i}_spirit`,
                        name : `player_${i}_spirit`,
                        
                    }
                ).prop(
                    'required',
                    true
                ).appendTo(`#row_input_player_${i}_spirit`);

                // Append the disabled default option
                spirit_select.append(
                    $("<option>").attr(
                            {
                            value: "",
                            disabled : true
                        }
                    ).text(`Select spirit`)
                );

                // Append the spirit options
                $(data["spirits"]).each(
                    function() {
                        spirit_select.append(
                            $("<option>").text(this)
                        );
                    }
                );

                // Reset the select to the first option
                $(`#col_select_player_${i}_spirit`).prop('selectedIndex',0);

                // Append the spirit img
                $("<img>").attr(
                    {
                        class : "col is_hidden",
                        id : `row_player_${i}_spirit_image`
                    }
                ).appendTo(`#col_player_${i}_info`);

                // Hide columns for players 2+
                if (i > 1) {
                    spirit_select.prop(
                        'required',
                        false
                    );
                    $(`#col_player_${i}_info`).hide();
                    $(`#col_select_player_${i}_spirit`).hide();

                    
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
                        // Set player ${i} board choice required
                        $(`#col_select_player_${i}_board`).prop(
                            "required",
                            true
                        );
                        // Set player ${i} spirit choice required
                        $(`#col_select_player_${i}_spirit`).prop(
                            "required",
                            true
                        );
                        // Show content for player ${i}
                        $(`#col_select_player_${i}_spirit`).show();
                        $(`#col_player_${i}_info`).show();
                    }
                    // Hide columns for players > this.value
                    else {
                        // Set player ${i} board choice not required
                        $(`#col_select_player_${i}_board`).prop(
                            "required",
                            false
                        );
                        // Reset player ${i} board choice
                        $(`#col_select_player_${i}_board`).prop(
                            'selectedIndex',
                            0
                        );
                        // Set player ${i} spirit choice required
                        $(`#col_select_player_${i}_spirit`).prop(
                            "required",
                            false
                        );
                        // Reset player ${i} spirit choice
                        $(`#col_select_player_${i}_spirit`).prop(
                            'selectedIndex',
                            0
                        );
                        // Hide player ${i} content
                        $(`#col_select_player_${i}_spirit`).hide();
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
        "#col_select_player_1_spirit",
        function() {
            // Assign appropriate image to player 1 spirit image div
            $("#row_player_1_spirit_image").attr(
                "src",
                `https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/master/static/${$("#col_select_player_1_spirit").val().split(' ').join('_')}.png`
            );
            // Show player 1 image
            $("#row_player_1_spirit_image").show();
        }
    )
)

// Set an event listener for showing player 2's spirit choice image by choosing a spirit for player 2
$(document).ready(
    $(document).on(
        "change",
        "#col_select_player_2_spirit",
        function() {
            // Assign appropriate image to player 2 spirit image div
            $("#row_player_2_spirit_image").attr(
                "src",
                `https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/master/static/${$("#col_select_player_2_spirit").val().split(' ').join('_')}.png`
            );
            // Show player 2 image
            $("#row_player_2_spirit_image").show();
        }
    )
)

// Set an event listener for showing player 3's spirit choice image by choosing a spirit for player 3
$(document).ready(
    $(document).on(
        "change",
        "#col_select_player_3_spirit",
        function() {
            // Assign appropriate image to player 3 spirit image div
            $("#row_player_3_spirit_image").attr(
                "src",
                `https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/master/static/${$("#col_select_player_3_spirit").val().split(' ').join('_')}.png`
            );
            // Show player 3 image
            $("#row_player_3_spirit_image").show();
        }
    )
)

// Set an event listener for showing player 4's spirit choice image by choosing a spirit for player 4
$(document).ready(
    $(document).on(
        "change",
        "#col_select_player_4_spirit",
        function() {
            // Assign appropriate image to player 4 spirit image div
            $("#row_player_4_spirit_image").attr(
                "src",
                `https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/master/static/${$("#col_select_player_4_spirit").val().split(' ').join('_')}.png`
            );
            // Show player 4 image
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
                if ($("#row_select_adversary_1_level").is(":hidden") && this.value != "No adversary") {
                    $("#row_select_adversary_1_level").show();
                }
                // Hide adversary 1 level select if this.value changed to "No adversary"
                else if ($("#row_select_adversary_1_level").is(":visible") && this.value == "No adversary") {
                    $("#row_select_adversary_1_level").hide();
                }
                // Reset the adversary 1 level select
                $("#col_select_adversary_1_level").prop(
                    'selectedIndex',
                    0
                );
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
                // Toggle adversary 2 column
                $("#row_select_adversary_2").toggle();
                // Hide and reset adversary 2 level
                $("#row_button_adversary_2").hide();
                $("#row_select_adversary_2_level").hide();
                $("#col_select_adversary_2_level").prop(
                    'selectedIndex',
                    0
                );
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
                // Show adversary 1 level select if this.value changed to an adversary
                if ($("#row_select_adversary_2_level").is(":hidden") && this.value != "No adversary") {
                    $("#row_select_adversary_2_level").show();
                }
                // Hide adversary 1 level select if this.value changed to "No adversary"
                else if ($("#row_select_adversary_2_level").is(":visible") && this.value == "No adversary") {
                    $("#row_select_adversary_2_level").hide();
                }
                // Reset the adversary 1 level select
                $("#col_select_adversary_2_level").prop(
                    'selectedIndex',
                    0
                );
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
                // Toggle scenario column and reset it
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