// Populate the player info divs
$(document).ready(
    function() {
        var spirits = [
                {text : "Lightning's Swift Strike"},
                {text : "River Surges in Sunlight"},
                {text : "Shadows Flicker Like Flame"},
                {text : "Vital Strength of Earth"},
            ];

        for (var i=1; i <= 4; i++) {
            $('<input type="text" />').attr(
                {
                    name : `player_${i}_name`,
                    type : `player_${i}_name`,
                    placeholder : `Player ${i} name (optional)`
                }
            ).appendTo(`#div_player_${i}_name`);

            var spirit_select = $('<select>').attr(
                {
                    name : `player_${i}_spirit`,
                    id : `player_${i}_spirit`
                }
            ).appendTo(`#div_player_${i}_spirit`);

            spirit_select.append(
                $("<option>").text(
                    `Select player ${i}'s spirit`
                ).attr(
                    "disabled", true
                )
            );

            $(spirits).each(
                function() {
                    spirit_select.append(
                        $("<option>").text(this.text)
                    );
                }
            );

            $(`#player_${i}_spirit`).prop('selectedIndex',0);

            if (i >= 2) {
                $(`#col_player_${i}_info`).hide();
            }
        }
    }
)

// Set an event listener for showing player info divs by choosing the number of players
$(document).ready(
    function() {
        $("#select_n_players").on(
            "change",
            function() {
                for (var i=1; i<=4; i++) {
                    if (i <= this.value) {
                        $(`#col_player_${i}_info`).show();
                    }
                    else {
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
                if ($("#div_adversary_1_level").is(":hidden") && this.value != "No adversary") {
                    $("#div_adversary_1_level").show();
                }
                else if ($("#div_adversary_1_level").is(":visible") && this.value == "No adversary") {
                    $("#div_adversary_1_level").hide();
                }
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
                if ($("#div_adversary_2_level").is(":hidden") && this.value != "No adversary") {
                    $("#div_adversary_2_level").show();
                }
                else if ($("#div_adversary_2_level").is(":visible") && this.value == "No adversary") {
                    $("#div_adversary_2_level").hide();
                }
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