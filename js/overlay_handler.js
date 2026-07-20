export function overlay_handler(){
    function activateOverlay(event){
        const number_id = event.currentTarget.id.split("_")[1]
        const id = parseInt(number_id);
        const overlay = document.querySelector(".entry-overlay");
        const title = document.querySelector(".entry-overlay .title");
        const image = document.querySelector(".entry-overlay .image");
        const caption = document.querySelector(".entry-overlay .caption");
        const writing = document.querySelector(".entry-overlay .caption .writing");
        const author = document.querySelector(".entry-overlay .caption .author b");
        let author_string = "";
        overlay.style.display = "flex";
        title.textContent = entryData[id][CSVCol.ENTRY_TITLE];
        image.src = "04_Entries/02_lobby/"+number_id+"_entry.png";
        writing.textContent = entryData[id][CSVCol.CAPTION];
        if (event.currentTarget.classList.contains("art")){
            console.log("art")
            author_string += "Art"
        }
        else{
            console.log("photo")
            author_string += "Photograph"
        }
        if (entryData[id][CSVCol.ARTIST].trim() === entryData[id][CSVCol.WRITER].trim()){
            author_string += " by "+entryData[id][CSVCol.ARTIST];
        }
        else {
            author_string += " by "+entryData[id][CSVCol.ARTIST]+"\r\nWriting by "+entryData[id][CSVCol.WRITER];
        }
        author.setAttribute('style', 'white-space: pre;')
        author.textContent = author_string;
        document.body.style.overflow = "hidden";
        caption.scrollTop = 0;
    }
    function deactivateOverlay(){
        const overlay = document.querySelector(".entry-overlay");
        overlay.style.display = "none";
        document.body.style.overflow = "auto";
    }

    $(document).keyup( function(e){
        if (e.key === "Escape") {
            deactivateOverlay();
        }
    });
}