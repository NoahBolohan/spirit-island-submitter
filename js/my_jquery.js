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