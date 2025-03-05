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

function parse_innate_power(innate_power_config, innate_power_number, col_width) {

    var innate_power_col = $("<div>").attr(
        {
            class : `col-${col_width}`,
            id : `col_innate_power_${innate_power_number}`
        }
    );

    for (const [key, value] of Object.entries(innate_power_config)) {
                    
        if (key == "name") {
            $("<div>").text(value.toUpperCase()).appendTo(innate_power_col);
        }
        else if (key.includes("tier")) {
            $("<div>").text(value["effect"]).appendTo(innate_power_col);
        }
    }

    return innate_power_col;
}