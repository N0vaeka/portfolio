const NOMBRE_IMAGES = 7

//===========================================//

function affImages() {
    var i, f, li = Math.ceil(NOMBRE_IMAGES / 3);

    for (i = 1; i <= li; i++) {
        f = document.createElement("div");

        f.setAttribute("class", "ligne");
        f.setAttribute("id", "li_" + i);

        document.getElementById("liste").appendChild(f);
    };

    for (i = 1; i <= NOMBRE_IMAGES; i++) {
        f = document.createElement("img");

        f.setAttribute("src", "images/" + i + ".png");
        f.setAttribute("class", "image");
        f.setAttribute("id", "img_" + i);
        f.setAttribute("alt", "Oups! Image n°" + i)

        document.getElementById("li_" + Math.ceil(i / 3)).appendChild(f);
    };
};

function question() {
    var coll = document.getElementsByClassName("pli");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            };
        } );
    };
};