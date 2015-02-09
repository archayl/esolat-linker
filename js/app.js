App = Ember.Application.create();

App.Router.map(function() {
	this.resource('state', { path: ':state_code' }, function() {
		this.resource('zone', { path: ':zone_code' });
	});
});

App.IndexRoute = Ember.Route.extend({
	model: function() {
		return zone.sort(function(a,b) {
			if (a.name > b.name) { return 1 }
			if (a.name < b.name) { return -1 }
			return 0;
		});
	}
});

App.StateRoute = Ember.Route.extend({
	model: function(params) {
		result = $.grep(zone, function(e) {
			return e.code === params.state_code;
		});
		return result[0].zone.sort(function(a,b) {;
			if (a.code > b.code) { return 1 }
			if (a.code < b.code) { return -1 }
			return 0;
		});
	},
});

App.StateController = Ember.ArrayController.extend({
	queryParams: ['state'],
	state: null
});

App.ZoneRoute = Ember.Route.extend({
	model: function(params) {
		return { 'zone_code': params.zone_code,
				'zone_url': "http://www2.e-solat.gov.my/solatE.php?kod="+params.zone_code+"&lang=BM" };
	},
});

zone = [{"name": "Pulau Pinang", "zone": [{"desc": "Seluruh Negeri Pulau Pinang", "code": "PNG01"}], "code": "PULAU_PINANG"}, {"name": "Negeri Sembilan", "zone": [{"desc": "Jempol, Tampin", "code": "NGS01"}, {"desc": "Port Dickson, Seremban, Kuala Pilah, Jelebu, Rembau", "code": "NGS02"}], "code": "NEGERI_SEMBILAN"}, {"name": "Kelantan", "zone": [{"desc": "K.Bharu,Bachok,Pasir Puteh,Tumpat,Pasir Mas,Tnh. Merah,Machang,Kuala Krai,Mukim Chiku", "code": "KTN01"}, {"desc": "Jeli, Gua Musang (Mukim Galas, Bertam)", "code": "KTN03"}], "code": "Kelantan"}, {"name": "Putrajaya", "zone": [{"desc": "Putrajaya", "code": "SGR04"}], "code": "Putrajaya"}, {"name": "Sabah", "zone": [{"desc": "Zon 6 - Gunung Kinabalu", "code": "SBH06"}, {"desc": "Zon 5 - Kudat, Kota Marudu, Pitas, Pulau Banggi", "code": "SBH05"}, {"desc": "Zon 7 - Papar, Ranau, Kota Belud, Tuaran, Penampang, Kota Kinabalu", "code": "SBH07"}, {"desc": "Zon 9 - Sipitang, Membakut, Beaufort, Kuala Penyu, Weston, Tenom, Long Pa Sia", "code": "SBH09"}, {"desc": "Zon 3 - Lahad Datu, Kunak, Silabukan, Tungku, Sahabat, Semporna", "code": "SBH03"}, {"desc": "Zon 2 - Pinangah, Terusan, Beluran, Kuamut, Telupit", "code": "SBH02"}, {"desc": "Zon 4 - Tawau, Balong, Merotai, Kalabakan", "code": "SBH04"}, {"desc": "Zon 8 - Pensiangan, Keningau, Tambunan, Nabawan", "code": "SBH08"}, {"desc": "Zon 1 - Sandakan, Bdr. Bkt. Garam, Semawang, Temanggong, Tambisan", "code": "SBH01"}], "code": "Sabah"}, {"name": "Perak", "zone": [{"desc": "Temengor dan Belum", "code": "PRK04"}, {"desc": "Pengkalan Hulu, Grik dan Lenggong", "code": "PRK03"}, {"desc": "Selama, Taiping, Bagan Serai dan Parit Buntar", "code": "PRK06"}, {"desc": "Teluk Intan, Bagan Datoh, Kg.Gajah,Sri Iskandar, Beruas,Parit,Lumut,Setiawan dan Pulau Pangkor", "code": "PRK05"}, {"desc": "Ipoh, Batu Gajah, Kampar, Sg. Siput dan Kuala Kangsar", "code": "PRK02"}, {"desc": "Tapah,Slim River dan Tanjung Malim", "code": "PRK01"}, {"desc": "Bukit Larut", "code": "PRK07"}], "code": "PERAK"}, {"name": "Labuan", "zone": [{"desc": "Labuan", "code": "WLY02"}], "code": "Labuan"}, {"name": "Perlis", "zone": [{"desc": "Kangar, Padang Besar, Arau", "code": "PLS01"}], "code": "PERLIS"}, {"name": "Johor", "zone": [{"desc": "Kluang dan Pontian", "code": "JHR03"}, {"desc": "Pulau Aur dan Pemanggil ", "code": "JHR01"}, {"desc": "Kota Tinggi, Mersing, Johor Bahru", "code": "JHR02"}, {"desc": "Batu Pahat, Muar, Segamat, Gemas", "code": "JHR04"}], "code": "JOHOR"}, {"name": "Terengganu", "zone": [{"desc": "Kemaman Dungun", "code": "TRG04"}, {"desc": "Besut, Setiu", "code": "TRG02"}, {"desc": "Hulu Terengganu", "code": "TRG03"}, {"desc": "Kuala Terengganu, Marang", "code": "TRG01"}], "code": "Terengganu"}, {"name": "Kuala Lumpur", "zone": [{"desc": "Kuala Lumpur", "code": "SGR03"}], "code": "Kuala%20Lumpur"}, {"name": "Melaka", "zone": [{"desc": "Bandar Melaka, Alor Gajah, Jasin, Masjid Tanah, Merlimau, Nyalas", "code": "MLK01"}], "code": "MELAKA"}, {"name": "Sarawak", "zone": [{"desc": "Zon 9 - Zon Khas", "code": "SWK09"}, {"desc": "Zon 3 - Song, Belingan, Sebauh, Bintulu, Tatau, Kapit", "code": "SWK03"}, {"desc": "Zon 6 - Kabong, Lingga, Sri Aman, Engkelili, Betong, Spaoh, Pusa, Saratok, Roban, Debak", "code": "SWK06"}, {"desc": "Zon 4 - Igan, Kanowit, Sibu, Dalat, Oya", "code": "SWK04"}, {"desc": "Zon 2 - Niah, Belaga, Sibuti, Miri, Bekenu, Marudi", "code": "SWK02"}, {"desc": "Zon 7 - Samarahan, Simunjan, Serian, Sebuyau, Meludam", "code": "SWK07"}, {"desc": "Zon 8 - Kuching, Bau, Lundu,Sematan", "code": "SWK08"}, {"desc": "Zon 5 - Belawai, Matu, Daro, Sarikei, Julau, Bitangor, Rajang", "code": "SWK05"}, {"desc": "Zon 1 - Limbang, Sundar, Terusan, Lawas", "code": "SWK01"}], "code": "Sarawak"}, {"name": "Pahang", "zone": [{"desc": "Kuantan, Pekan, Rompin, Muadzam Shah", "code": "PHG02"}, {"desc": "Genting Sempah, Janda Baik, Bukit Tinggi", "code": "PHG05"}, {"desc": "Bentong, Raub, Kuala Lipis", "code": "PHG04"}, {"desc": "Bukit Fraser, Genting Higlands, Cameron Higlands", "code": "PHG06"}, {"desc": "Pulau Tioman", "code": "PHG01"}, {"desc": "Maran, Chenor, Temerloh, Bera, Jerantut", "code": "PHG03"}], "code": "PAHANG"}, {"name": "Selangor", "zone": [{"desc": "Sabak Bernam, Kuala Selangor,  Klang, Kuala Langat", "code": "SGR02"}, {"desc": "Gombak,H.Selangor,Rawang, H.Langat,Sepang,Petaling,  S.Alam", "code": "SGR01"}], "code": "SELANGOR"}, {"name": "Kedah", "zone": [{"desc": "Pendang, Kuala Muda, Yan", "code": "KDH02"}, {"desc": "Langkawi", "code": "KDH06"}, {"desc": "Padang Terap, Sik", "code": "KDH03"}, {"desc": "Kulim, Bandar Bahru", "code": "KDH05"}, {"desc": "Baling", "code": "KDH04"}, {"desc": "Kota Setar, Kubang Pasu, Pokok Sena", "code": "KDH01"}, {"desc": "Gunung Jerai", "code": "KDH07"}], "code": "KEDAH"}]
