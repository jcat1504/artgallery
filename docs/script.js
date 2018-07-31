var data = {
    "images": [{
            "img": "img/balloon.jpg"
        },
        {
            "img": "img/cate.jpg"
        },
        {
            "img": "img/dragon.jpg"
        },
        {
            "img": "img/Groot.jpg"
        },
        {
            "img": "img/flareon.jpg"
        },
        {
            "img": "img/forest.jpg"
        },
        {
            "img": "img/fox.jpg"
        },
        {
            "img": "img/glaceon.jpg"
        },
        {
            "img": "img/majora.jpg"
        },


    ]
};
data.images.forEach(function(obj) {
    var img = new Image();
    img.src = obj.img;
    img.setAttribute("class", "art-gallery");
    document.getElementById("images").appendChild(img);

});