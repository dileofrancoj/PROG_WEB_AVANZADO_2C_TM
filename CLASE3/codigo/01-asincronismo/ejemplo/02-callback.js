
// -- Codigo escrito por terceros --
function funcionQueDemora(callback) {
    setTimeout(callback, 2000);
}


// -- Nuestro código --
funcionQueDemora(function() {
    console.log('ok');
})
