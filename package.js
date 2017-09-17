Package.describe({
  name: 'matadur:sweetalert2',
  version: '1.4.0',
  // Brief, one-line summary of the package.
  summary: 'Meteor Package for sweetAlert2: a beautiful replacement for javascript\' alert()',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/matadur/sweetalert2.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.addFiles('src/sweetalert2.min.js', 'client');
  api.addFiles('src/sweetalert2.min.css', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('matadur:sweetalert2');
});
