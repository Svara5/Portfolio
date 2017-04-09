$(document).ready(function() {

    $(".type-it").typeIt({
        strings: ['Name: Sravan Varanasi', 'Age: 25', 'Crime: Being cool']
    });
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);

});
