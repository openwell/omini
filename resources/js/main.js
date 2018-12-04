$(document).ready(function() {
//   $('h1').click(function(){
//       $(this).css('background-color', 'yellow')
//   })

/* Animations on scroll */
$('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
}, {
    offset: '50%'
});

$('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
}, {
    offset: '50%'
});

$('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeIn');
}, {
    offset: '50%'
});

$('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated pulse');
}, {
    offset: '50%'
});


 var map = new GMaps({
     div: '.map',
     lat: 6.4836554,
     lng: 3.4867208,
     zoom: 12
   });

   map.addMarker({
    lat: 6.4836554,
    lng: 3.3867208,
    title: 'Lima',
    infoWindow: {
        content: '<p>Lagos</p>'
      }
    // click: function(e) {
    //   alert('You clicked in this marker');
    // }
  });














});