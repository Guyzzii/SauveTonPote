(function ($) {
    // Instantiate MixItUp:
    $('#Container').mixItUp( {
        load: {
            filter: '.category-1'
        }
    });

    // Add smooth scrolling to all links in navbar + footer link
    $(".sidenav a").on('click', function(event) {
        var hash = this.hash;
        if( hash ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){
                window.location.hash = hash;
            });
        }

    });

})(jQuery);


$('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})