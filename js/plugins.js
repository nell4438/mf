$(document).ready(function() {
    $('.dropdown').hover(
        function() { // Mouse enter
            $(this).children('.dropdown-menu').addClass('show'); // Show the dropdown
            $(this).children('.dropdown-toggle').addClass('show').attr('aria-expanded', true);
        }, function() { // Mouse leave
            $(this).children('.dropdown-menu').removeClass('show'); // Hide the dropdown
            $(this).children('.dropdown-toggle').removeClass('show').attr('aria-expanded', false);
        }
    );
});