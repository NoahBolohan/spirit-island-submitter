// Generate element tracker counters
$(document).ready(
    function() {

        $.getJSON('https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/refs/heads/master/data/config.json', function(data) {

            $("#spirit_island_tracker_body").data(
                "elements", data["elements"]
            )

            $.each(
                data["elements"],
                function(key, element) {

                    var col_for_element = $("<div>").attr(
                        {
                            class : "col p-0",
                            id : `col_${element}_element_counter`
                        }
                    ).data(
                        "locked_count", 0
                    );

                    var row_for_plus_button = $("<div>").attr(
                        {
                            class : "row p-0 justify-content-center margin_auto"
                        }
                    );

                    var row_for_element_img = $("<div>").attr(
                        {
                            class : "row justify-content-center",
                            style : "position: relative;"
                        }
                    );

                    var row_for_minus_button = $("<div>").attr(
                        {
                            class : "row p-0 justify-content-center margin_auto"
                        }
                    );

                    $("<button>").attr(
                        {
                            class : "col btn btn-xs astext",
                            id : `button_${element}_plus`,
                            type : "button"
                        }
                    ).text(
                        "\u2795"
                    ).appendTo(
                        row_for_plus_button
                    );

                    $("<img>").attr(
                        {
                            class : "col-1 element_img",
                            src : `https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/master/static/elements/${element}.png`,
                            id : `element_${element}`
                        }
                    ).data(
                        "counter", 0
                    ).appendTo(
                        row_for_element_img
                    );

                    $("<div>").attr(
                        {
                            class : "element_img_text_overlay",
                            id : `element_${element}_overlay_text`
                        }
                    ).appendTo(
                        row_for_element_img
                    );

                    $("<button>").attr(
                        {
                            class : "col btn btn-xs astext",
                            id : `button_${element}_minus`,
                            type : "button"
                        }
                    ).text(
                        "\u2796"
                    ).appendTo(
                        row_for_minus_button
                    );

                    row_for_plus_button.appendTo(
                        col_for_element
                    );

                    row_for_element_img.appendTo(
                        col_for_element
                    );

                    row_for_minus_button.appendTo(
                        col_for_element
                    );

                    col_for_element.appendTo(
                        $("#row_counters_element_tracker")
                    );
                }
            )
        });
    }
)

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

                            check_tier_availabilities()
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

                            check_tier_availabilities();
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

$(document).ready(
    function() {

        $("#button_show_setup_instructions").on(
            "click",
            function() {
                $("#modal_setup").modal("show");
            }
        );
    }
)

function assign_spirit_setup_instructions(
    setup
) {
    $("#modal_setup_body").empty();

    $("#modal_setup_body").html(
        spirit_text_keyword_converter(
            setup,
            18
        )
    );
}

function parse_innate_power(
    innate_power_config,
    innate_power_number, 
    col_width
) {

    var innate_power_col = $("<div>").attr(
        {
            class : `col-${col_width}`
        }
    )

    var innate_power_card = $("<div>").attr(
        {
            class : `card margin-auto`,
            id : `col_innate_power_${innate_power_number}`
        }
    ).appendTo(
        innate_power_col
    );

    for (const [key, value] of Object.entries(innate_power_config)) {
                    
        if (key == "name") {
            $("<div>").attr(
                {
                    class : "card-header text-center mb-1 p-1",
                    style: "font-size : 13px"
                }
            ).text(
                value.toUpperCase()
            ).appendTo(
                innate_power_card
            );
        }
        else if (key.includes("tier")) {
            parse_innate_tier(
                innate_power_number,
                key,
                value
            ).appendTo(innate_power_card);
        }
    }

    return innate_power_col;
}

function parse_innate_tier(
    innate_power_number,
    innate_power_tier,
    innate_power_tier_config
) {

    var tier_row = $("<div>").attr(
        {
            class : "row mb-1 mx-1 justify-content-center",
            id : `row_innate_power_${innate_power_number}_${innate_power_tier}`
        }
    );

    generate_element_threshold_button_for_tier(
        innate_power_number,
        innate_power_tier,
        innate_power_tier_config
    ).appendTo(
        tier_row
    );

    return tier_row;
}

function generate_element_threshold_button_for_tier(
    innate_power_number,
    innate_power_tier,
    innate_power_config
) {
    var tier_button = $("<button>").attr(
        {
            class : "col btn btn-primary",
            id : `button_innate_power_${innate_power_number}_${innate_power_tier}`,
            type : "button"
        }
    ).prop(
        "disabled",true
    );

    append_threshold_string(
        tier_button,
        innate_power_config["threshold"]
    );

    assign_modal_to_tier_button(
        innate_power_number,
        innate_power_tier,
        innate_power_config
    );

    tier_button.on(
        "click",
        function() {
            $(`#model_innate_power_${innate_power_number}_${innate_power_tier}`).modal("show");
        }
    )

    return tier_button;
}

function append_threshold_string(
    div,
    threshold
) {
    
    $.each(
        threshold,
        function(element, count) {

            if (count != 0) {

                if (count > 0) {
                    $("<span>").attr(
                        {
                            style : "display: inline-block; vertical-align: middle;"
                        }
                    ).html(
                        "&nbsp;" + count
                    ).appendTo(
                        div
                    );
                }
                
                if (element == "COST") {
                    $("<img>").attr(
                        {
                            src : `https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/master/static/icons/${count}_cost.png`,
                            style: "height: 1.5em; display: inline-block; vertical-align: middle;"
                        }
                    ).appendTo(
                        div
                    );
                }
                else if (element == "BEASTS") {
                    $("<img>").attr(
                        {
                            src : "https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/master/static/icons/beasts.svg",
                            style: "height: 1em; display: inline-block; vertical-align: text-top;"
                        }
                    ).appendTo(
                        div
                    );
                }
                else if (element == "DESTROYED_PRESENCE") {
                    $("<img>").attr(
                        {
                            src : "https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/master/static/icons/destroyed_presence.svg",
                            style: "height: 1em; display: inline-block; vertical-align: baseline;"
                        }
                    ).appendTo(
                        div
                    );
                }
                else if (element == "CARDS_IN_PLAY") {
                    $("<img>").attr(
                        {
                            src : "https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/master/static/icons/power_card.svg",
                            style: "height: 1em; display: inline-block; vertical-align: text-top;"
                        }
                    ).appendTo(
                        div
                    );
                }
                else {
                    $("<img>").attr(
                        {
                            src : `https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/master/static/elements/${element}.png`,
                            style: "height: 1.5em; display: inline-block; vertical-align: middle;"
                        }
                    ).appendTo(
                        div
                    );
                }
            }
        }
    );

    return div;
}

function assign_modal_to_tier_button(
    innate_power_number,
    innate_power_tier,
    innate_power_config
) {

    var modal_for_tier_button = $("<div>").attr(
        {
            class : "modal fade",
            id  : `model_innate_power_${innate_power_number}_${innate_power_tier}`,
            style: "position: absolute; float: left; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 75%;"
        }
    );

    var modal_dialog =$("<div>").attr(
        {
            class : "modal-dialog",
            role : "document"
        }
    ).appendTo(
        modal_for_tier_button
    );

    var modal_content =$("<div>").attr(
        {
            class : "modal-content"
        }
    ).appendTo(
        modal_dialog
    );

    var modal_header = $("<div>").attr(
        {
            class: "modal-header justify-content-center"
        }
    ).appendTo(
        modal_content
    );

    var modal_title = $("<div>").attr(
        {
            class: "modal-title"
        }
    );
    
    append_threshold_string(
        modal_title,
        innate_power_config["threshold"]
    ).appendTo(
        modal_header
    );

    $("<div>").attr(
        {
            class: "modal-body"
        }
    ).html(
        spirit_text_keyword_converter(
            innate_power_config["effect"],
            18
        )
    ).appendTo(
        modal_content
    );

    modal_content.appendTo(
        modal_for_tier_button
    );

    modal_for_tier_button.appendTo(
        "#div_modals_innate_powers"
    );
}

function check_tier_availabilities() {

    $.each(
        $("#col_input_player_1_spirit").data("spirit_config"),
        function(config_variable, value) {

            if (config_variable.includes("innate_power")) {

                $.each(
                    value,
                    function(ip_key, ip_value) {

                        if (ip_key.includes("tier")) {

                            var innate_tier_available = true;

                            $.each(
                                ip_value["threshold"],
                                function(element, element_threshold) {

                                    if (
                                        $(`#element_${element}`).data("counter") < element_threshold
                                    ) {
                                        innate_tier_available = false;
                                    }
                                }
                            )

                            if (innate_tier_available) {
                                $(`#button_${config_variable}_${ip_key}`).prop(
                                    "disabled",false
                                )
                            }
                            else {
                                $(`#button_${config_variable}_${ip_key}`).prop(
                                    "disabled",true
                                )
                            }
                        }
                    }
                )
            }
        }
    )
}

function spirit_text_keyword_converter(
    string,
    max_size
) {

    var input_string_array = string.split(
        /(\:|\(|\)|\/|\<|\>|\.|\,|\s+)/
    );

    var return_html_array = ["<p>"];

    $.ajax({
        url: 'https://raw.githubusercontent.com/NoahBolohan/spirit-island-tracker/refs/heads/master/data/config.json',
        async: false,
        dataType: 'json',
        success: function (json) {
            $.each(
                input_string_array,
                function(key, value) {
                    
                    if (value in json["keywords"]) {
                        return_html_array.push(
                            // `<object data="static/icons/${json["keywords"][value]}" height="${height}px"></object>`
                            `<object data="static/icons/${json["keywords"][value]}" style="max-height: ${max_size}px; max-width: ${max_size}px;"></object>`
                        )
                    }
                    else {
                        return_html_array.push(
                            value
                        )
                    }
                }
            )
        }
    });

    return_html_array.push(
        "</p>"
    )

    var return_html_string = return_html_array.join("");

    return return_html_string;
}