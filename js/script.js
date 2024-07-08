//Navbar
$('.nav').css('left',`${-$('.nav').outerWidth(true)}px`);

$('.nav-btn').on('click',function(){
    
    $('.nav').animate({'left' : $('.nav').css('left') == '0px'? `${-$('.nav').outerWidth(true)}px` : '0px'},500);
    $('#home').animate({'margin-left': $('.nav').css('left') == '0px'? `0px` : `${$('.nav').outerWidth(true)}px`},500);
})

$('.nav-item').on('click',function(){
    if($(this).html()=='Home'){
        closeNavbar()
    }
})

$('.fa-xmark').on('click',closeNavbar)

function closeNavbar(){
    $('.nav').animate({left : `${-$('.nav').outerWidth(true)}px`},500);
    $('#home').animate({'margin-left':`0px`},500);
}

//Accordion
$('.singer').on('click',function(){
    $('.singer-info').not($(this).next()).slideUp();
    $(this).next().slideToggle();
})

//Counter
// Set the date we're counting down to
var countDownDate = new Date("Jun 5, 2025 20:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    $('.days').html(days);
    $('.hours').html(hours);
    $('.minutes').html(minutes);
    $('.seconds').html(seconds);

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        $('.count-down').html('<p class="text-4xl text-white font-mono font-bold">The event has been expired</p>')
    }
}, 1000);

//TextArea counter
function checkTextAreaLength(){
    let rem = 100-$('textarea').eq(0).val().length;
    $('.remaining-chars').html(rem==0?'There is no':`${rem}`);
}
$('textarea').eq(0).on('input',checkTextAreaLength)

//Submit Button
$('.submit').on('click',function(){
    $('input').val('');
    $('textarea').val('');
    checkTextAreaLength();
})


