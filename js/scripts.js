
function on_load() {
    /*
    Stuff to do on app load.
    */
    form_checkbox_listener();
}

function checkForm() {
    var e=document.getElementById("text_invader_cards_in_deck").value;//alert(e);
    if(e===""){
        alert("nothing selected");
        return false;
    }
}

function form_checkbox_listener() {
    document.getElementById("googleform").addEventListener("submit", () => {
        if(document.getElementById("checkbox_win").checked) {
            document.getElementById("checkbox_win_hidden").disabled = true;
        }
    });
}
