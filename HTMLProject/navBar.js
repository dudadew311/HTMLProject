$(document).ready(function (){

	var submenu1 = ['<a href="#"><div><i class="fa fa-quote-left"></i><span>Fusce<br>ultries</span></div></a>',
		'<a href="#"><div><i class="fa fa-mobile-phone"></i><span>Aliquam<br>Tempus</span></div></a>',
		'<a href="#"><div><i class="fa fa-th-large"></i><span>Proin<br>aliquam</span></div></a>',
		'<a href="#"><div><i class="fa fa-cubes"></i><span>Nunc<br>sapien</span></div></a>',
		'<a href="#"><div><i class="fa fa-money"></i><span>Mauris<br>iaculis</span></div></a>',
		'<a href="#"><div><i class="fa fa-credit-card"></i><span>Morbi<br>rutrum</span></div></a>',
		];
	var submenu2 = ['<a href="#"><div><i class="fa fa-file"></i><span>Fusce<br>ultries</span></div></a>',
		'<a href="#"><div><i class="fa fa-feed"></i><span>Aliquam<br>Tempus</span></div></a>',
		'<a href="#"><div><i class="fa fa-flag"></i><span>Proin<br>aliquam</span></div></a>',
		'<a href="#"><div><i class="fa fa-automobile"></i><span>Nunc<br>sapien</span></div></a>',
		'',
		'',
		];
	var submenu3 = ['<a href="#"><div><i class="fa fa-diamond"></i><span>Fusce<br>ultries</span></div></a>',
		'<a href="#"><div><i class="fa fa-database"></i><span>Aliquam<br>Tempus</span></div></a>',
		'<a href="#"><div><i class="fa fa-folder"></i><span>Proin<br>aliquam</span></div></a>',
		'<a href="#"><div><i class="fa fa-hotel"></i><span>Nunc<br>sapien</span></div></a>',
		'<a href="#"><div><i class="fa fa-home"></i><span>Mauris<br>iaculis</span></div></a>',
		'<a href="#"><div><i class="fa fa-legal"></i><span>Morbi<br>rutrum</span></div></a>',
		];
	var submenu4 = ['<a href="#"><div><i class="fa fa-bar-chart"></i><span>Fusce<br>ultries</span></div></a>',
		'<a href="#"><div><i class="fa fa-pie-chart"></i><span>Aliquam<br>Tempus</span></div></a>',
		'<a href="#"><div><i class="fa fa-line-chart"></i><span>Proin<br>aliquam</span></div></a>',
		'<a href="#"><div><i class="fa fa-cog"></i><span>Nunc<br>sapien</span></div></a>',
		'<a href="#"><div><i class="fa fa-empire"></i><span>Mauris<br>iaculis</span></div></a>',
		'<a href="#"><div><i class="fa fa-envira"></i><span>Morbi<br>rutrum</span></div></a>',
		];
	var submenu5 = ['<a href="#"><div><i class="fa fa-dollar"></i><span>Fusce<br>ultries</span></div></a>',
		'<a href="#"><div><i class="fa fa-gbp"></i><span>Aliquam<br>Tempus</span></div></a>',
		'<a href="#"><div><i class="fa fa-ruble"></i><span>Proin<br>aliquam</span></div></a>',
		'<a href="#"><div><i class="fa fa-eur"></i><span>Nunc<br>sapien</span></div></a>',
		'<a href="#"><div><i class="fa fa-cny"></i><span>Mauris<br>iaculis</span></div></a>',
		'<a href="#"><div><i class="fa fa-won"></i><span>Morbi<br>rutrum</span></div></a>',
		];
	var submenu6 = ['<a href="#"><div><i class="fa fa-map"></i><span>Locations</span></div></a>',
		'<a href="#"><div><i class="fa fa-envelope"></i><span>Email Us</span></div></a>',
		'<a href="#"><div><i class="fa fa-internet-explorer"></i><span>Links</span></div></a>',
		'<a href="#"><div><i class="fa fa-phone"></i><span>Phone<br>numbers</span></div></a>',
		'',
		'',
		];
	var current;

	$('#home').mouseenter(function (){
		if (current !== "home"){
			$('.submenu li').hide();
			$('.navbar li').css('border-bottom-color', '#fff');
		}
		$('.submenu li').each(function (index){
			$(this).html(submenu1[index]);
			$('.submenu li').fadeIn(1000);
			$('.navbar li').css('background-color', '#00aeef');
			$('#home').css('border-bottom-color', '#0299d2').css('background-color', '#0299d2');
			$('.submenu li').css('background-color', '#0299d2')
			current = "home";
		});
	});

	$('#ot').mouseenter(function (){
		if (current !== "ot"){
			$('.submenu li').hide();
			$('.navbar li').css('border-bottom-color', '#fff');
		}
		$('.submenu li').each(function (index){
			$(this).html(submenu2[index]);
			$('.submenu li').fadeIn(1000);
			$('.navbar li').css('background-color', '#00aeef');
			$('#ot').css('border-bottom-color', '#0299d2').css('background-color', '#0299d2');
			$('.submenu li').css('background-color', '#0299d2')
			current = "ot";
		});
	});

	$('#ob').mouseenter(function (){
		if (current !== "ob"){
			$('.submenu li').hide();
			$('.navbar li').css('border-bottom-color', '#fff');
		}
		$('.submenu li').each(function (index){
			$(this).html(submenu3[index]);
			$('.submenu li').fadeIn(1000);
			$('.navbar li').css('background-color', '#00aeef');
			$('#ob').css('border-bottom-color', '#0299d2').css('background-color', '#0299d2');
			$('.submenu li').css('background-color', '#0299d2')
			current = "ob";
		});
	});

	$('#ip').mouseenter(function (){
		if (current !== "ip"){
			$('.submenu li').hide();
			$('.navbar li').css('border-bottom-color', '#fff');
		}
		$('.submenu li').each(function (index){
			$(this).html(submenu4[index]);
			$('.submenu li').fadeIn(1000);
			$('.navbar li').css('background-color', '#00aeef');
			$('#ip').css('border-bottom-color', '#0299d2').css('background-color', '#0299d2');
			$('.submenu li').css('background-color', '#0299d2')
			current = "ip";
		});
	});

	$('#tps').mouseenter(function (){
		if (current !== "tps"){
			$('.submenu li').hide();
			$('.navbar li').css('border-bottom-color', '#fff');

		}
		$('.submenu li').each(function (index){
			$(this).html(submenu5[index]);
			$('.submenu li').fadeIn(1000);
			$('.navbar li').css('background-color', '#00aeef');
			$('#tps').css('border-bottom-color', '#0299d2').css('background-color', '#0299d2');
			$('.submenu li').css('background-color', '#0299d2')
			current = "tps";
		});
	});

	$('#contact').mouseenter(function (){
		if (current !== "contact"){
			$('.submenu li').hide();
			$('.navbar li').css('border-bottom-color', '#fff');
		}
		$('.submenu li').each(function (index){
			$(this).html(submenu6[index]);
			$('.submenu li').fadeIn(1000);
			$('.navbar li').css('background-color', '#00aeef');
			$('#contact').css('border-bottom-color', '#0299d2').css('background-color', '#0299d2');
			$('.submenu li').css('background-color', '#0299d2')
			current = "contact";
		});
	});
});