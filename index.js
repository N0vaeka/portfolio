function prin(nb) {
    console.log("slt");
    var i, f
    for (i = 1; i <= nb; i++) {
        f = document.createElement("img")
        f.setAttribute("src", "images/"+i+".png")
        f.setAttribute("class", "image")
        f.setAttribute("id", i)

        document.getElementById("liste").appendChild(f)
    }
}
