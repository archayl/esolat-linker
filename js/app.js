App = Ember.Application.create();

App.Router.map(function() {
	this.resource('state', { path: ':state_code' }, function() {
		this.resource('zone', { path: ':zone_code' });
	});
});

App.IndexRoute = Ember.Route.extend({
	model: function() {
		return Ember.$.getJSON('zone_list.json').then(function(data) {
			return data.sort(function(a,b) {
				if (a.code > b.code) { return 1 }
				if (a.code < b.code) { return -1 }
				return 0;
			});
		});
	},
});

App.StateRoute = Ember.Route.extend({
	model: function(params) {
		return Ember.$.getJSON('zone_list.json')
				.then(function(params, data) {
					result = $.grep(data, function(e) {
						return e.code === params.state_code;
					});
					return result[0].zone.sort(function(a,b) {
						if (a.code > b.code) { return 1 }
						if (a.code < b.code) { return -1 }
						return 0;
					});
				}.bind(null, params));
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

