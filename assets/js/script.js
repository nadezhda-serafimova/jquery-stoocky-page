jQuery(function(){

    //Hamburger Menu
    var hamburger = jQuery(".hamburger");
    hamburger.on("click", function(e) {
        hamburger.toggleClass("is-active");
    });

    //Push Menu
    var menuRight = document.getElementById( 'cbp-spmenu-s2' ),
        showRightPush = document.getElementById( 'showRightPush' ),
        body = document.body;

    showRightPush.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( body, 'cbp-spmenu-push-toleft' );
        classie.toggle( menuRight, 'cbp-spmenu-open' );
    };

});