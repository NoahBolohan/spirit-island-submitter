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