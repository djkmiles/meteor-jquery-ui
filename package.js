Package.describe({
	name: 'djk:jquery-ui',
	version: '1.12.1',
	summary: 'Load jquery-ui.min.js into your Meteor project.',
	git: 'https://github.com/djkmiles/meteor-jquery-ui.git',
	documentation: 'README.md'
});


Package.onUse(function(api) {
	api.versionsFrom('1.4')
	api.use('ui', 'client')
    api.addFiles(['jquery-ui.js'], 'client')
});
