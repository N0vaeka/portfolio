const NOMBRE_IMAGES = 7

//===========================================//

function prin() {
    nb = NOMBRE_IMAGES;
    var i, f, li = Math.ceil(nb / 3);

    for (i = 1; i <= li; i++) {
        f = document.createElement("div");

        f.setAttribute("class", "ligne");
        f.setAttribute("id", "li_" + i);

        document.getElementById("liste").appendChild(f);
    };

    for (i = 1; i <= nb; i++) {
        f = document.createElement("img");

        f.setAttribute("src", "images/" + i + ".png");
        f.setAttribute("class", "image");
        f.setAttribute("id", "img_" + i);

        document.getElementById("li_" + Math.ceil(i / 3)).appendChild(f);
    };
};
