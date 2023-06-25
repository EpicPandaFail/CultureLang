$(document).ready(function () {

    var cookies = document.cookie
        .split(';')
        .map(cookie => cookie.split("="))
        .reduce((accumulator, [key, value]) =>
            ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }),
            {});

    var culture = cookies.culture;

    if (!culture) {
        culture = 'fr-CA';
    }

    updatePlaceHolders(culture);

    $('#en-CA').click(function () {
        updatePlaceHolders('en-CA');
        setCulture('en-CA');
    });

    $('#fr-CA').click(function () {
        updatePlaceHolders('fr-CA');
        setCulture('fr-CA');
    });

    function setCulture(culture) {
        $.ajax({
            type: 'POST',
            url: '/Home/SetCulture',
            data: { culture: culture },
            success: function () {
                location.reload();
            }
        })
    }

    function updatePlaceHolders(culture) {
        if (culture === 'en-CA') {
            $("#name").attr("placeholder", "Your Name");
            $("#email").attr("placeholder", "Your Email");
            $("#subject").attr("placeholder", "Subject");
        } else if (culture === 'fr-CA') {
            $("#name").attr("placeholder", "Votre Nom");
            $("#email").attr("placeholder", "Votre Courriel");
            $("#subject").attr("placeholder", "Sujet");
        }
    }

})
