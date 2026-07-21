function scaleEntries(){
    let screenwidth = $("main").width();
    for (let i = 1; i <= 28; i++){
        let number = i < 10? '0'+i : i;
        $("#entry_"+number).css("scale", screenwidth/1920);
    }
    $("#guestbook").css("scale", screenwidth/1920);
}

export {scaleEntries};