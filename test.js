exports["test nothing"] = function(assert, done) {
	var nothing = require("./nothing-to-see-here.js");
	assert.notEqual(nothing, undefined, "Nothing is not undefined.");

	done();
};

if (module == require.main) require('test').run(exports);

