
// Set an event listener for increasing the element data counters by 1 when the plus button is pressed
$(document).ready(
    function() {
        $.getJSON('https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/refs/heads/master/data/config.json', function(data) {

            $.each(
                data["elements"],
                function(key, element) {

                    $(`#button_${element}_plus`).on(
                        "click",
                        function() {

                            // Increase the data counter by 1
                            $(`#element_${element}`).data(
                                "counter",
                                $(`#element_${element}`).data(
                                    "counter"
                                ) + 1
                            );

                            // Display counter value is the value is 2 or greater
                            if ( $(`#element_${element}`).data("counter") >= 2) {
                                $(`#element_${element}_overlay_text`).text(
                                    $(`#element_${element}`).data("counter")
                                )
                            } else {
                                $(`#element_${element}_overlay_text`).empty()
                            }
                            

                            // If element counter is greater than zero, remove image opacity
                            if ( $(`#element_${element}`).data("counter") > 0) {
                                
                                $(`#element_${element}`).css(
                                    "opacity",
                                    1
                                )
                            }
                        }
                    );
                }
            );
        });
    }
);

// Set an event listener for decreasing the element data counters by 1 when the minus button is pressed
$(document).ready(
    function() {
        $.getJSON('https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/refs/heads/master/data/config.json', function(data) {

            $.each(
                data["elements"],
                function(key, element) {

                    $(`#button_${element}_minus`).on(
                        "click",
                        function() {

                            // Increase the data counter by 1
                            $(`#element_${element}`).data(
                                "counter",
                                Math.max(
                                    0,
                                    $(`#element_${element}`).data(
                                        "counter"
                                    ) - 1
                                )
                            );

                            // Display counter value is the value is 2 or greater
                            if ( $(`#element_${element}`).data("counter") >= 2) {
                                $(`#element_${element}_overlay_text`).text(
                                    $(`#element_${element}`).data("counter")
                                )
                            } else {
                                $(`#element_${element}_overlay_text`).empty()
                            }

                            // If element counter is zero, restore image opacity
                            if ( $(`#element_${element}`).data("counter") == 0) {
                                
                                $(`#element_${element}`).css(
                                    "opacity",
                                    0.3
                                )
                            }
                        }
                    );
                }
            );
        });
    }
);

// Set an event listener for resetting the element data counters when the reset button is pressed
$(document).ready(
    function() {
        $.getJSON('https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/refs/heads/master/data/config.json', function(data) {

            $.each(
                data["elements"],
                function(key, element) {

                    $("#button_reset_element_tracker").on(
                        "click",
                        function() {

                            // Reset each element counter to its locked value
                            $(`#element_${element}`).data(
                                "counter",
                                $(`#col_${element}_element_counter`).data("locked_count")
                            );

                            // Display counter value is the value is 2 or greater
                            if ( $(`#element_${element}`).data("counter") >= 2) {
                                $(`#element_${element}_overlay_text`).text(
                                    $(`#element_${element}`).data("counter")
                                )
                            } else {
                                $(`#element_${element}_overlay_text`).empty()
                            }

                            // If element counter is zero, restore image opacity
                            if ( $(`#element_${element}`).data("counter") == 0) {
                                
                                $(`#element_${element}`).css(
                                    "opacity",
                                    0.3
                                )
                            }
                            else {
                                
                                $(`#element_${element}`).css(
                                    "opacity",
                                    1
                                )
                            }
                        }
                    );
                }
            );
        });
    }
);

// Set an event listener for locking the elemental counters when the toggle lock button is pressed
$(document).ready(
    function() {
        $("#button_toggle_lock_element_tracker").on(
            "click",
            function() {
                if ($("#button_toggle_lock_element_tracker").text() == "Lock") {
                    $("#button_toggle_lock_element_tracker").text(
                        "Unlock"
                    );
                    $("#button_toggle_lock_element_tracker").addClass("btn-secondary").removeClass("btn-primary");

                    $.getJSON('https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/refs/heads/master/data/config.json', function(data) {

                        $.each(
                            data["elements"],
                            function(key, element) {
            
                               $(`#col_${element}_element_counter`).data("locked_count",$(`#element_${element}`).data("counter"));
                            }
                        );
                    });
                }
                else {
                    $("#button_toggle_lock_element_tracker").text(
                        "Lock"
                    );
                    $("#button_toggle_lock_element_tracker").addClass("btn-primary").removeClass("btn-secondary");

                    $.getJSON('https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/refs/heads/master/data/config.json', function(data) {

                        $.each(
                            data["elements"],
                            function(key, element) {
            
                                $(`#col_${element}_element_counter`).data("locked_count",0);
                            }
                        );
                    });
                }
            }
        );
    }
);