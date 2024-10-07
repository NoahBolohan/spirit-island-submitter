function on_load() {
    /*
    Stuff to do on app load.
    */
    form_checkbox_listener();
}

function form_checkbox_listener() {
    document.getElementById("googleform").addEventListener("submit", () => {
        if(document.getElementById("checkbox_win").checked) {
            document.getElementById("checkbox_win_hidden").disabled = true;
        }
    });
}