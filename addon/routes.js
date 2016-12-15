import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('sites', function() {
    this.route('create');
    this.route('edit');
  });
});