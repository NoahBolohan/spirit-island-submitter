// Define custom show / hide functions
function custom_show(div_id) {
    $(div_id).css(
        "visibility",
        "visible"
    );
    $(div_id).css(
        "max-height",
        "100%"
    );
}

function custom_hide(div_id) {
    $(div_id).css(
        "visibility",
        "hidden"
    );
    $(div_id).css(
        "max-height",
        "0"
    );
}

// Populate the player info divs
$(document).ready(
    function() {

        $.getJSON('https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/refs/heads/master/data/config.json', function(data) {
            // Populate divs for each player
            for (var i=1; i <= data["max_players"]; i++) {

                // Player ${i} column
                if (i==1) {
                    $("<div>").attr(
                        {
                            class : "col-12",
                            id : `col_player_${i}_info`,
                            name : `player_${i}_info`
                        }
                    ).appendTo("#row_player_info");
                }
                else {
                    $("<div>").attr(
                        {
                            class : "col-6",
                            id : `col_player_${i}_info`,
                            name : `player_${i}_info`
                            
                        }
                    ).appendTo("#row_player_info");
                }

                // Player ${i} card
                $("<div>").attr(
                    {
                        class : "card",
                        id : `card_player_${i}_info`
                    }
                ).appendTo(`#col_player_${i}_info`);

                // Player ${i} card header
                $(`<div>`).attr(
                    {
                        class : "card-header text-center"
                    }
                ).text(
                    `Player ${i}`
                ).appendTo(`#card_player_${i}_info`);
                
                // Player name row
                $("<div>").attr(
                    {
                        class : "row m-3 justify-content-center",
                        id : `row_player_${i}_name`,
                    }
                ).appendTo(`#card_player_${i}_info`);

                // Player name display text
                $("<div>").attr(
                    {
                        class : "col-5",
                        id : `row_player_${i}_name_display_text`,
                    }
                ).appendTo(`#row_player_${i}_name`);

                $(`#row_player_${i}_name_display_text`).text(
                    "Name:"
                );

                // Player name text input
                $("<input>").attr(
                    {
                        class : "col-7",
                        id : `col_input_player_${i}_name`,
                        name : `player_${i}_name`,
                        type : "text",
                        placeholder : `Player ${i}`
                    }
                ).appendTo(`#row_player_${i}_name`);

                // Player board row
                $("<div>").attr(
                    {
                        class : "row mb-3 mx-3 justify-content-center",
                        id : `row_player_${i}_board`,
                    }
                ).appendTo(`#card_player_${i}_info`);

                // Player board display text
                $("<div>").attr(
                    {
                        class : "col-5",
                        id : `row_player_${i}_board_display_text`,
                    }
                ).appendTo(`#row_player_${i}_board`);

                $(`#row_player_${i}_board_display_text`).text(
                    "Board:"
                );

                // Player board select
                var board_select = $("<select>").attr(
                    {
                        class : "col-7",
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
                    ).text(`Select`)
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
                        class : "row mb-3 mx-3 justify-content-center",
                        id : `row_input_player_${i}_spirit`,
                    }
                ).appendTo(`#card_player_${i}_info`);

                // Player spirit text input
                var spirit_select = $("<input>").attr(
                    {
                        class : "col",
                        list : `col_input_player_${i}_spirit_list`,
                        id : `col_input_player_${i}_spirit`,
                        name : `player_${i}_spirit`,
                        placeholder : "Enter spirit"
                    }
                ).prop(
                    'required',
                    true
                ).appendTo(`#row_input_player_${i}_spirit`);

                // Player spirit datalist
                $("<datalist>").attr(
                    {
                        id : `col_input_player_${i}_spirit_list`
                    }
                ).appendTo(`#row_input_player_${i}_spirit`);

                // Append the spirit options
                $(Object.keys(data["spirits"])).each(
                    function() {
                        $(`#col_input_player_${i}_spirit_list`).append(
                            $("<option>").text(this)
                        );
                    }
                );

                // Reset the select to the first option
                $(`#col_input_player_${i}_spirit`).prop('selectedIndex',0);

                // Hide columns for players 2+
                if (i > 1) {
                    spirit_select.prop(
                        'required',
                        false
                    );
                    $(`#card_player_${i}_info`).hide();
                    $(`#col_player_${i}_info`).hide();
                    $(`#col_input_player_${i}_spirit`).hide();

                    
                }
            }

            // Populate adversary selects
            $(Object.keys(data["adversaries"])).each(
                function() {
                    $("#row_select_adversary_1").append(
                        $("<option>").text(this)
                    );
                }
            );

            $(Object.keys(data["adversaries"])).each(
                function() {
                    $("#row_select_adversary_2").append(
                        $("<option>").text(this)
                    );
                }
            );

            // Populate scenario select
            $(Object.keys(data["scenarios"])).each(
                function() {
                    $("#col_select_scenario").append(
                        $("<option>").text(this)
                    );
                }
            );
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

                    // Size rows and columns accordingly
                    if (this.value == 1) {
                        $(`#col_player_1_info`).attr(
                            {
                                class : "col-12"
                            }
                        );
                        $("#row_player_info").removeClass("g-2");
                        $("#row_player_info").addClass("g-0");
                    }
                    else {
                        $(`#col_player_1_info`).attr(
                            {
                                class : "col-6"
                            }
                        );
                        $("#row_player_info").removeClass("g-0");
                        $("#row_player_info").addClass("g-2");
                    }
                    
                    // Show columns for players <= this.value
                    if (i <= this.value) {
                        // Set player ${i} board choice required
                        $(`#col_select_player_${i}_board`).prop(
                            "required",
                            true
                        );
                        // Set player ${i} spirit choice required
                        $(`#col_input_player_${i}_spirit`).prop(
                            "required",
                            true
                        );
                        // Show content for player ${i}
                        $(`#col_input_player_${i}_spirit`).show();
                        $(`#card_player_${i}_info`).show();
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
                        $(`#col_input_player_${i}_spirit`).prop(
                            "required",
                            false
                        );
                        // Reset player ${i} spirit choice
                        $(`#col_input_player_${i}_spirit`).val("");
                        $(`#card_player_${i}_info`).attr(
                            "style",
                            ""
                        );

                        // Hide player ${i} content
                        $(`#col_input_player_${i}_spirit`).hide();
                        $(`#row_player_${i}_spirit_image`).hide();
                        $(`#card_player_${i}_info`).hide();
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
        "#col_input_player_1_spirit",
        function() {
            $.getJSON('https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/refs/heads/master/data/config.json', function(data) {

                // Assign appropriate image to player 1 spirit image div
                var spirit_config = data["spirits"][$("#col_input_player_1_spirit").val()]

                if ("alt_name" in spirit_config & "aspect_art" in spirit_config & spirit_config["aspect_art"] == "true") {
                    var spirit_image_file_name = spirit_config["alt_name"]
                }
                else if ("aspect_for" in spirit_config) {
                    var spirit_image_file_name = spirit_config["aspect_for"].split(' ').join('_')
                }
                else {
                    var spirit_image_file_name = $("#col_input_player_1_spirit").val().split(' ').join('_')
                }

                var new_url = encodeURI("https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/master/static/spirit_images/" + spirit_image_file_name + ".png");

                new_url = new_url.replace(/'/g, '%27')

                $("#card_player_1_info").attr(
                    "style",
                    `background-image : url(${new_url}); background-size: center; background-size: cover; background-color: rgba(255,255,255,0.6); background-blend-mode: lighten;`
                );
            })
        }
    )
)

// Set an event listener for showing player 2's spirit choice image by choosing a spirit for player 2
$(document).ready(
    $(document).on(
        "change",
        "#col_input_player_2_spirit",
        function() {    
            // Assign appropriate image to player 1 spirit image div

            var new_url = encodeURI("https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/master/static/spirit_images/" + $("#col_input_player_2_spirit").val().split(' ').join('_') + ".png");

            new_url = new_url.replace(/'/g, '%27')

            $("#card_player_2_info").attr(
                "style",
                `background-image : url(${new_url}); background-size: cover; background-color: rgba(255,255,255,0.6); background-blend-mode: lighten;`
            );
        }
    )
)

// Set an event listener for showing player 3's spirit choice image by choosing a spirit for player 3
$(document).ready(
    $(document).on(
        "change",
        "#col_input_player_3_spirit",
        function() {    
            // Assign appropriate image to player 1 spirit image div

            var new_url = encodeURI("https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/master/static/spirit_images/" + $("#col_input_player_3_spirit").val().split(' ').join('_') + ".png");

            new_url = new_url.replace(/'/g, '%27')

            $("#card_player_3_info").attr(
                "style",
                `background-image : url(${new_url}); background-size: cover; background-color: rgba(255,255,255,0.6); background-blend-mode: lighten;`
            );
        }
    )
)

// Set an event listener for showing player 4's spirit choice image by choosing a spirit for player 4
$(document).ready(
    $(document).on(
        "change",
        "#col_input_player_4_spirit",
        function() {    
            // Assign appropriate image to player 1 spirit image div

            var new_url = encodeURI("https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/master/static/spirit_images/" + $("#col_input_player_4_spirit").val().split(' ').join('_') + ".png");

            new_url = new_url.replace(/'/g, '%27')

            $("#card_player_4_info").attr(
                "style",
                `background-image : url(${new_url}); background-size: cover; background-color: rgba(255,255,255,0.6); background-blend-mode: lighten;`
            );
        }
    )
)

// Set an event listener for enabling adversary 1 level and assigning the adversary 1 background image url by choosing an adversary 1
$(document).ready(
    function() {
        $("#row_select_adversary_1").on(
            "change",
            function() {
                $.getJSON('https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/refs/heads/master/data/config.json', function(data) {

                    // Assign appropriate image to adversary 1 card
                    var adversary_config = data["adversaries"][$("#row_select_adversary_1").val()];

                    var adversary_image_file_name = $("#row_select_adversary_1").val().split(' ').join('_');

                    var new_url = encodeURI("https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/master/static/adversaries/" + adversary_image_file_name + ".png");

                    new_url = new_url.replace(/'/g, '%27').replace(/\(/g, "%28").replace(/\)/g, "%29");

                    $("#card_adversary_1").attr(
                        "style",
                        `background-image : url(${new_url}); background-position: center; background-size: center; background-size: cover; background-color: rgba(255,255,255,0.6); background-blend-mode: lighten;`
                    );

                    // Enable adversary 1 level select if this.value changed to an adversary
                    if ($("#row_select_adversary_1_level").is(":disabled") && this.value != "No adversary") {
                        $("#row_select_adversary_1_level").prop(
                            "disabled",
                            false
                        );
                    }
                    // Disable adversary 1 level select if this.value changed to "No adversary"
                    else if (!$("#row_select_adversary_1_level").is(":disabled") && this.value == "No adversary") {
                        $("#row_select_adversary_1_level").prop(
                            "disabled",
                            true
                        );
                    }
                    // Reset the adversary 1 level select
                    $("#row_select_adversary_1_level").prop(
                        'selectedIndex',
                        0
                    );
                });
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
                // Show adversary 2 row
                custom_show("#card_adversary_2");
                $("#row_select_adversary_2_level").prop(
                    'selectedIndex',
                    0
                );
                // Hide and reset adversary 2 button
                custom_hide("#row_button_adversary_2");

                // Toggle remove adversary 2 button
                custom_show("#row_button_remove_adversary_2");
            }
        )
    }
)

// Set an event listener for removing adversary 2 options by toggling the remove adversary 2 button
$(document).ready(
    function() {
        $("#col_button_remove_adversary_2").on(
            "click",
            function() {
                // Hide adversary 2 row
                custom_hide("#card_adversary_2");
                $("#row_select_adversary_2").prop(
                    'selectedIndex',
                    0
                );
                $("#row_select_adversary_2_level").prop(
                    'selectedIndex',
                    0
                );
                $("#row_select_adversary_2_level").prop(
                    "disabled",
                    true
                );
                // Hide adversary 2 button
                custom_show("#row_button_adversary_2");

                // Toggle remove adversary 2 button
                custom_hide("#row_button_remove_adversary_2");
            }
        )
    }
)

// Set an event listener for enabling adversary 2 level and assigning the adversary 2 background image url by choosing an adversary 2
$(document).ready(
    function() {
        $("#row_select_adversary_2").on(
            "change",
            function() {
                $.getJSON('https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/refs/heads/master/data/config.json', function(data) {

                    // Assign appropriate image to adversary 2 card
                    var adversary_config = data["adversaries"][$("#row_select_adversary_2").val()];

                    var adversary_image_file_name = $("#row_select_adversary_2").val().split(' ').join('_');

                    var new_url = encodeURI("https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/master/static/adversaries/" + adversary_image_file_name + ".png");

                    new_url = new_url.replace(/'/g, '%27').replace(/\(/g, "%28").replace(/\)/g, "%29");

                    $("#card_adversary_2").attr(
                        "style",
                        `background-image : url(${new_url}); background-position: center; background-size: center; background-size: cover; background-color: rgba(255,255,255,0.6); background-blend-mode: lighten;`
                    );

                    // Enable adversary 2 level select if this.value changed to an adversary
                    if ($("#row_select_adversary_2_level").is(":disabled") && this.value != "No adversary") {
                        $("#row_select_adversary_2_level").prop(
                            "disabled",
                            false
                        );
                    }
                    // Disable adversary 2 level select if this.value changed to "No adversary"
                    else if (!$("#row_select_adversary_2_level").is(":disabled") && this.value == "No adversary") {
                        $("#row_select_adversary_2_level").prop(
                            "disabled",
                            true
                        );
                    }
                    // Reset the adversary 2 level select
                    $("#row_select_adversary_2_level").prop(
                        'selectedIndex',
                        0
                    );
                });
            }
        )
    }
)

// Set an event listener for showing scenario options by clicking the add scenario button
$(document).ready(
    function() {
        $("#button_scenario").on(
            "click",
            function() {
                // Show scenario card and reset it
                $('#col_select_scenario').prop(
                    "selectedIndex",
                    0
                );
                custom_show("#card_scenario");
                custom_show("#card_header_scenario");
                custom_show("#col_select_scenario");
                // Hide scenario button and show remove scenario button
                custom_hide("#row_button_scenario");
                custom_show("#row_button_remove_scenario");
            }
        )
    }
)

// Set an event listener for removing scenario options by clicking the remove scenario button
$(document).ready(
    function() {
        $("#button_remove_scenario").on(
            "click",
            function() {
                // Hide scenario card and reset it
                custom_hide("#card_scenario");
                custom_hide("#card_header_scenario");
                custom_hide("#col_select_scenario");
                $('#col_select_scenario').prop(
                    "selectedIndex",
                    0
                );
                // Show scenario button and hide remove scenario button
                custom_show("#row_button_scenario");
                custom_hide("#row_button_remove_scenario");
                
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