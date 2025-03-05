
// Score calculator
function score_calculator() {

    var total_score = 0;

    if ($("#col_select_scenario").val() != "Second Wave") {
        
        // Score-checking based on victory
        if ($("#checkbox_win").is(":checked")) {
            
            // Add score for difficulty
            total_score += 5*$("#col_difficulty_number").text();

            // Add score for winning
            total_score += 10;

            // Add score for remaining invader cards in the deck
            total_score += 2*$("#text_invader_cards_in_deck").val();
        }
        else {

            // Add score for difficulty
            total_score += 2*$("#col_difficulty_number").text();

            // Add score for remaining invader cards in the deck
            total_score += 1*$("#text_invader_cards_not_in_deck").val();
        }

        // Add score for remaining Dahan
        total_score += Math.floor($("#text_remaining_dahan").val()/$("#col_select_n_players").val());

        // Remove score for blight on the island
        total_score -= Math.floor($("#text_blight_on_island").val()/$("#col_select_n_players").val());

        // Assign the score value to the score display div
        $("#col_score_number").text(
            total_score
        )
    }
}

// Set an event listener for computing score on victory change
$(document).ready(
    function() {
        $("#checkbox_win").on(
            "change",
            score_calculator
        )
    }
)

// Set an event listener for computing score on invader cards in deck change
$(document).ready(
    function() {
        $("#text_invader_cards_in_deck").on(
            "change",
            score_calculator
        )
    }
)

// Set an event listener for computing score on invader cards not in deck change
$(document).ready(
    function() {
        $("#text_invader_cards_not_in_deck").on(
            "change",
            score_calculator
        )
    }
)

// Set an event listener for computing score on remaining Dahan change
$(document).ready(
    function() {
        $("#text_remaining_dahan").on(
            "change",
            score_calculator
        )
    }
)

// Set an event listener for computing score on blight on island change
$(document).ready(
    function() {
        $("#text_blight_on_island").on(
            "change",
            score_calculator
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