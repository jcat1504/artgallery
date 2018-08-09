var data = {
    "images": [{
            "img": "img/balloon.jpg",
            "id": "balloon"
        },
        {
            "img": "img/cate.jpg",
            "id": "cate"

        },
        {
            "img": "img/dragon.jpg",
            "id": "dragon"
        },
        {
            "img": "img/Groot.jpg",
            "id": "groot"
        },
        {
            "img": "img/flareon.jpg",
            "id": "flareon"
        },
        {
            "img": "img/forest.jpg",
            "id": "forest"
        },
        {
            "img": "img/fox.jpg",
            "id": "fox"
        },
        {
            "img": "img/glaceon.jpg",
            "id": "glaceon"
        },
        {
            "img": "img/majora.jpg",
            "id": "majora"
        },


    ]
};
data.images.forEach(function(obj) {
    var img = new Image();
    img.src = obj.img;
    img.setAttribute("class", "art");
    document.getElementById(obj.id).appendChild(img);

});