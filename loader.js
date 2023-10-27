for (var i = 0; i < localStorage.length; i++){
    const note = document.createElement("div");
    const notesContainer = document.getElementById("notes-container");
    
    const titleLabel = document.createElement("h3");
    titleLabel.setAttribute("id", i + "_title");
    const contentLabel = document.createElement("h5");
    contentLabel.setAttribute("id", i + "_content");
    
    note.appendChild(titleLabel);
    note.appendChild(contentLabel);
    
    var noteData = JSON.parse(localStorage.getItem(localStorage.key(i)));
    
    // Заполним текстом
    titleLabel.innerHTML = localStorage.key(i);
    contentLabel.innerHTML = noteData[0];


    
    note.className = "note";
    notesContainer.appendChild(note);
    
}