var link = window.location;

// var element = $('ul.navbar-nav li a').filter(function() {
    
// });
// var element = $('ul.navbar-nav a').filter(function() {
//     return this.href == url;
// }).addClass('active').parent();

// while (true) {
//     if (element.is('li')) {
//         element = element.parent().addClass('in').parent();
//     } else {
//         break;
//     }
// }

var footer = '&copy; 2018.<br><a href="#">Designed by: Adeyinka M. Adefolurin</a>';
$('div.footer').append(footer);

var topmenu = '<nav class="topmenu"><a class="topmenu-brand" href="#"><img src="assets/img/logo.png" alt="Logo" width="30" height="30"> Avalon Templar </a><div class="topmenu-content"><ul class="topmenu-nav"><li class="notifications"><a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-inbox"></i> <span class="text">Notifications</span></a><div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="#"><p class="notif-name"><small><i class="fa fa-twitter"></i> Twitter <span class="timer pull-right">08-09-2018</span></small></p><small class="notif-message">You have a new follower!</small></a><a class="dropdown-item" href="#"><p class="notif-name"><small><i class="fa fa-facebook"></i> Facebook <span class="timer pull-right">05-09-2018</span></small></p><small class="notif-message">Find friends on your contact list!</small></a></div></li><li><a href="profile.html"><i class="fa fa-user"></i>  <span class="text">John Doe</span></a></li></ul></div></nav>';
$('div.top-nav').append(topmenu);

