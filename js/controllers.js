var texts = [
	'<h3>Задача</h3>\
	Разработать ПО для управления устройствами обеспечивающими проведение тренеровок на тренажерах <a href="http://www.gctc.ru/">Центра подготовки космонавтов им. Ю. А. Гагарина</a>:\
	<ul>\
		<li>видео- и аудио-коммутаторами;</li>\
		<li>устройствами включения;</li>\
		<li>видеокамерами;</li>\
		<li>преобразователями сигналов.</li>\
	</ul>\
	\
	<h3>Вызовы</h3>\
	<ul>\
		<li>обеспечение управления и мониторинга большого количествава устройств;</li>\
		<li>обеспечение оперативной обработки команд тренажера.</li>\
	</ul>\
	<h3>Статус</h3>\
	Выполняется разработка новых версий ПО\
	'
	, '\
	<h3>Задача</h3>\
	Разработать портал позволяющий людям находить ответственных агентов по подбору недвижимости и услуг для нее.\
	<h3>Вызовы</h3>\
	<ul>\
		<li>организовать простой и быстрый механизм подачи заявки;</li>\
		<li>организовать удобный навигатор по заявкам для агентов.</li>\
	</ul>\
	<h3>Статус</h3>\
	Портал доступен: <a href="http://homebid.ru">http://homebid.ru</a>'
	, '\
	<h3>Задачи</h3>\
	<ul>\
		<li>Разработать прототип портала для членов организации. Обеспечить функционал для:\
		<ul>\
			<li>представления информации об организации;</li>\
			<li>управления членством;</li>\
			<li>коммуникации членов организации;</li>\
			<li>планирования поездок.</li>\
		</ul></li>\
		<li>Разработать техническое задание на разработку, провести процедуру тендера и координировать работу подрядчика и организации.</li>\
	</ul>\
	\
	<h3>Вызовы</h3>\
	<ul>\
		<li>разработать систему поиска географичесских объектов на основных языках организации;</li>\
		<li>разработать удобную систему поиска и регистрации учестников;</li>\
		<li>разработать инструменты точной настроки видимости информации пользователя.</li>\
	</ul>\
	<h3>Статус</h3>\
	Прототип доступен: <a href="http://drupal.servas.org">http://drupal.servas.org</a><br>\
	Портал в процессе разработки.'
	, '\
	<h3>Задача</h3>\
	Собирать, систематизировать и публиковать информацию по вопросам переработки и повторного использования пластика в России и за рубежом.\
	<h3>Статус</h3>\
	Блог доступен: <a href="http://replastic.blogspot.ru">http://replastic.blogspot.ru</a>\
	'
	, '<h3>Задача</h3>\
	Разработать механизмы для взаимодествия любителей и профессионалов неигрового кино.\
	\
	<h3>Вызовы</h3>\
	<ul>\
		<li>обеспечить функционирование под высокими нагрузками CMS Drupal;</li>\
		<li>разработать модули для управления пользователями.</li>\
	</ul>\
	<h3>Статус</h3>\
	Портал доступен по адресу <a href="http://miradox.ru">miradox.ru</a>\
	'
	, '<h3>Задача</h3>\
	Разработать мобильный сайт для крупнейшего сайта объявлений об автомобилях Санкт-Петербурга <a href="http://bibika.ru">"Бибика.ру"</a>.\
	\
	<h3>Вызовы</h3>\
	<ul>\
		<li>обеспечить функционирование под большим кол-вом мобильных браузеров;</li>\
		<li>разработать форму позволяющую пользователю заполнить более 200 параметров автомобиля, но не шокирующую пользователя, который хочет описать лишь базовые характеристики.</li>\
	</ul>\
	<h3>Статус</h3>\
	Сайт в процессе интеграции с основным порталом.\
	'
	, '\
	<h3>Задача</h3>\
	Разработать приложение для подачи объявлений для одной из крупнейших газет объявлений Санкт-Петербурга "Реклама Шанс".\
	\
	<h3>Вызовы</h3>\
	<ul>\
		<li>обеспечить поддержку детального рубрикатора объявлений;</li>\
		<li>обеспечить поддержку основных мобильных операционных систем: iOS, Android, Windows Phone;</li>\
		<li>обеспечить взаимодействие с камерой телефона.</li>\
	</ul>\
	<h3>Статус</h3>\
	Приложение закрыто после реорганизации компании и портала <a href="http://chance.ru">chance.ru</a>\
	',
	'\
	<h3>Задача</h3>\
	Доработать механизм интеграции браузера <a href="http://www.chromium.org/Home">Chromium</a> с социальной сетью <a href="http://vk.com">ВКонтакте</a>.\
	\
	<h3>Вызовы</h3>\
	<ul>\
		<li>перевести все на новый API ВКонтакте;</li>\
		<li>адаптировать механизм обновлений <a href="https://code.google.com/p/omaha/">Omaha V3 (Google Updater)</a>;</li>\
		<li>выявить и устранить проблемы производительности.</li>\
	</ul>\
	<h3>Статус</h3>\
	Приложение доступно для скачивания <a href="http://www.socium2.ru">socium2.ru</a>\
	',
	'\
	<h3>Задача</h3>\
	Разработать приложение объединяющее пользователей в чаты с учетом местоположения.\
	\
	<h3>Вызовы</h3>\
	<ul>\
		<li>обеспечить быстрый поиск по географическим координатам;</li>\
		<li>интегрировать авторизацию с использованием протокола OAuth 2.0 компании Google.</li>\
	</ul>\
	<h3>Статус</h3>\
	Приложение доступно по адресу <a href="http://lunchandmeet.me/">lunchandmeet.me</a>\
	',
	'\
	<h3>Задача</h3>\
	Разработать приложение для точки продаж билетов компании "Нева Трэвэл Компани".\
	\
	<h3>Вызовы</h3>\
	<ul>\
		<li>обеспечить взаимодействие с принтером билетов и специализированной клавиатурой;</li>\
		<li>разработать синхронизацию с сайтом компании.</li>\
	</ul>\
	<h3>Статус</h3>\
	Программное обеспечение сдано в эксплуатацию.\
	'
];

var techs = [
	  {logo:'/imgs/techs/c++.png',       name:'C++',               link:"http://ru.wikipedia.org/wiki/C%2B%2B"}               // 0
	, {logo:'/imgs/techs/csharp.png',    name:'C#',                link:"http://ru.wikipedia.org/wiki/C_Sharp"}                // 1
	, {logo:'/imgs/techs/delphi.png',    name:'Delphi',            link:"http://http://ru.wikipedia.org/wiki/Delphi_(%D1%81%D1%80%D0%B5%D0%B4%D0%B0_%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8)"}            // 2
	, {logo:'/imgs/techs/java.png',      name:'Java',              link:"http://java.com"}              // 3
	, {logo:'/imgs/techs/php.png',       name:'PHP',               link:"http://php.net"}               // 4
	, {logo:'/imgs/techs/py.png',        name:'Python',            link:"http://python.org"}            // 5
	, {logo:'/imgs/techs/qt.png',        name:'Qt',                link:"http://qt-project.org"}                // 6
	, {logo:'/imgs/techs/angularjs.png', name:'AngularJS',         link:"http://angularjs.org"}         // 7
	, {logo:'/imgs/techs/ec2.png',       name:'AWS',               link:"http://aws.amazon.com"}               // 8
	, {logo:'/imgs/techs/mongodb.png',   name:'MongoDB',           link:"http://www.mongodb.org"}           // 9
	, {logo:'/imgs/techs/mysql.png',     name:'MySQL',             link:"http://www.mysql.com"}             // 10
	, {logo:'/imgs/techs/yii.png',       name:'Yii',               link:"http://www.yiiframework.com"}               // 11
	, {logo:'/imgs/techs/drupal.png',    name:'Drupal',            link:"http://drupal.org"}            // 12
	, {logo:'/imgs/techs/cordova.png',   name:'Cordova',           link:"http://cordova.apache.org"}           // 13
	, {logo:'/imgs/techs/jqm.png',       name:'jQuery Mobile',     link:"http://jquerymobile.com"}     // 14
	, {logo:'/imgs/techs/oc.png',        name:'Object C',          link:"http://ru.wikipedia.org/wiki/Objective-C"}          // 15
	, {logo:'/imgs/techs/gae.png',       name:'Google App Engine', link:"https://appengine.google.com/‎"} // 16
];

var faces = [
	  {photo:'/imgs/faces/mp.jpg', weight:2, idx:0, name:'Матвей Пашковский', position:'разработчик'} // 0
	, {photo:'',                   weight:1, idx:1, name:'Владислав Лифиренко', position:'разработчик'} // 1
	//, {photo:'/imgs/faces/pr.jpg', weight:1, idx:2, name:'Петр Рашкин', position:'разработчик'} // 1
	, {photo:'/imgs/faces/kt.png', weight:1, idx:3, name:'Екатерина Троянова', position:'разработчик'} // 5
	, {photo:'/imgs/faces/yk.jpg', weight:1, idx:4, name:'Юрий Казаков', position:'разработчик'} // 7
	, {photo:'/imgs/faces/sb.jpg', weight:1, idx:5, name:'Сергей Быковский', position:'разработчик'} // 9
	, {photo:'/imgs/faces/ds.jpg', weight:1, idx:6, name:'Денис Шудегов', position:'дизайнер'} // 3
	, {photo:'/imgs/faces/ep.jpg', weight:1, idx:7, name:'Елизавета Пашковская', position:'проектировщик интерфейсов'} // 4
	, {photo:'/imgs/faces/mb.jpg', weight:1, idx:8, name:'Маргарита Бамбурова', position:'UI/UX-консультант'} // 6
	, {photo:'/imgs/faces/as.jpg', weight:1, idx:9, name:'Алксей Самолин', position:'консультант по интернет рекламе'} // 2
	//, {photo:'/imgs/faces/mm.jpg', weight:1, idx:8, name:'Михаил Малыгин'} // 8
]

var projects = [
	  {logo:'/imgs/roskosmos.png', weight:2, description:{img:'/imgs/roskosmos.png',        text:texts[0], faces:[faces[0], faces[5]],                               techs:[techs[0], techs[1], techs[2]],              brief:'ПО для тренажеров Центра подготовки космонавтов'}}
	, {logo:'/imgs/homebid.png',   weight:1, description:{img:'/imgs/projects/homebid.jpg', text:texts[1], faces:[faces[0], faces[2], faces[4], faces[3], faces[6]], techs:[techs[4], techs[10], techs[11], techs[8]],  brief:'Инструмент поиска недвижимости и услуг <strong>Homebid.ru</strong>'}}
	, {logo:'/imgs/sol.png',       weight:1, description:{img:'/imgs/projects/servas.jpg',  text:texts[2], faces:[faces[0], faces[4]],                               techs:[techs[4], techs[10], techs[11], techs[12]], brief:'Портал <strong>ServasOnLine</strong> для членов организации Servas International'}}
	//, {                            weight:1, description:{img:'',                           text:texts[3], faces:[faces[0], faces[1]],                               techs:[],                                          brief:'Блог по вопросам использования и переработки пластика <strong>RePlastic</strong>'}}
	, {logo:'/imgs/miradox.png',   weight:1, description:{img:'/imgs/projects/miradox.png', text:texts[4], faces:[faces[0], faces[8], faces[9]],                     techs:[techs[4], techs[10], techs[12]],            brief:'Портал для профессионалов неигрового кино <strong>Miradox</strong>'}}
	, {logo:'/imgs/bibika.png',    weight:1, description:{img:'',                           text:texts[5], faces:[faces[0], faces[4]],                               techs:[techs[4], techs[10], techs[11]],            brief:'Мобильная версия портала <strong>Bibika.ru</strong>'}}
	, {logo:'/imgs/chance.png',    weight:1, description:{img:'/imgs/projects/chance.jpg',  text:texts[6], faces:[faces[0], faces[4]],                               techs:[techs[1], techs[3], techs[15], techs[14]],  brief:'Мобильное приложение <strong>Шанс.Объявления</strong> для портала Chance.ru'}}
	, {logo:'/imgs/socium2.png',   weight:1, description:{img:'/imgs/projects/socium2.jpg', text:texts[7], faces:[faces[0], faces[5]],                               techs:[techs[0]],                                  brief:'Адаптация кода <strong>браузера Социум<sup>2</sup></strong> для новой версии API ВКонтакте'}}
	, {logo:'/imgs/lam.png',       weight:1, description:{img:'/imgs/projects/lam.png',     text:texts[8], faces:[faces[0]],                                         techs:[techs[3], techs[7], techs[9], techs[16]],   brief:'Мобильный геолокационный сервис для новых встреч <strong>Lunch&Meet</strong>'}}
	, {logo:'/imgs/nt.jpg',        weight:1, description:{img:'',                           text:texts[9], faces:[faces[0], faces[7]],                               techs:[techs[5], techs[9]],                        brief:'<strong>Терминал кассира</strong> для продажи билетов компании «Нева Трэвэл Компани»'}}
];

var articles = [
	  {title:'Формальная проверка мобильного приложения', url:'http://mpashkovskiy.blogspot.ru/2012/04/blog-post.html', author:'М. Пашковский', date:'24.04.2012'}
	, {title:'Матрица технологий разработки ПО', url: 'http://mpashkovskiy.blogspot.ru/2011/10/blog-post_23.html', author:'М. Пашковский', date:'23.10.2011'}
	, {title:'Регистрация событий приложения в системном журнале Windows', url: 'http://mpashkovskiy.blogspot.ru/2011/10/windows_23.html', author:'М. Пашковский', date:'23.10.2011'}
	, {title:'Зачем бинокулярное зрение роботам?', url: 'http://mpashkovskiy.blogspot.ru/2011/10/blog-post.html', author:'М. Пашковский', date:'23.10.2011'}
];

var vacancies = [
	  {title: 'Java Android разработчик', url:'http://hantim.ru/jobs/31766-java-android-razrabotchik-fulltaym-udalenno'}
];

  
  
function FrontCtrl($scope) {
	$scope.projects = projects;
	$scope.faces = faces;
	$scope.techs = techs;
	$scope.articles = articles;
	$scope.vacancies = vacancies;
	
	$scope.showMap = function() {
		var myOptions = {zoom:18,center:new google.maps.LatLng(59.94453694047417,30.29509119814759),mapTypeId: google.maps.MapTypeId.ROADMAP};
		map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
		marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(59.94453694047417, 30.29509119814759)});
		//infowindow = new google.maps.InfoWindow({content:"&#1041;&#1080;&#1088;&#1078;&#1077;&#1074;&#1072;&#1103; &#1083;&#1080;&#1085;&#1080;&#1103; 14<br/> &#1057;&#1072;&#1085;&#1082;&#1090;-&#1055;&#1077;&#1090;&#1077;&#1088;&#1073;&#1091;&#1088;&#1075;" });
		//google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});
		//infowindow.open(map,marker);
		return true;
	}
	//google.maps.event.addDomListener(window, 'load', $scope.showMap);
}

function ProjectsCtrl($scope, $routeParams) {
	
	$scope.project = projects[$routeParams.id];
	
}