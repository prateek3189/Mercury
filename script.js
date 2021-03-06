$(document).ready(function () {
    // Hide all divs present in `parent`
    $('.tabular-form div').hide();

    // Show only default div
    var activate = $('.active').data('target');
    $('#' + activate).show();
});

$('.skip-main').focusin(function () {
    // Set border style when `skip-main` gets focus
    $('#main').css('outline', 'auto');
    $('#main').css('outline-color', '#347aad');
});

$('.skip-main').focusout(function () {
    // Unset border style when `skip-main` loses focus
    $('#main').css('outline', 'none');
});


$('#navbar a, .tabular-nav a, .footer-main-nav-ul a').on('click', function (e) {
    // Prevent default events firing
    e.preventDefault();

    // Read attribute value of clicked link
    var target = $(e.target).data('target');
    var targetArea = $(e.target).parents('#navbar, .tabular-nav, .footer-main-nav-ul').data('targetarea');

    // Hide all divisions from parent division first
    $('#' + targetArea + ' div').hide();
    $(e.target).parents('#navbar, .tabular-nav').find('.active').removeClass('active');

    // Show desired division from parent division
    $('#' + target).show();
    $('#' + target).focus();

    // Mark the selected navbar option as `active`
    $(e.target).addClass('active');
});


$('.dealfilter-btn').on('click', function (e) {
    // Prevent default events firing
    e.preventDefault();

    $('.dealfilter-btn').removeClass('active');
    $(e.target).addClass('active');
});