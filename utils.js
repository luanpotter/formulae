var Formulae = Formulae || {};

Formulae.utils = {
	transpose : function (a) {
		return a[0].map(function (_, c) {
			return a.map(function (r) {
				return r[c];
			});
		});
	},

	flatten : function (array) {
		return Array.concat.apply([], array);
	}

 };