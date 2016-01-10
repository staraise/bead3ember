import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('teachers', function() {
    this.route('list');
    //this.route('new');
    this.route('edit', {path:'/edit/:error_id'});  // /errors/edit/:id
  });
  this.route('subjects', function() {
    this.route('list');
    this.route('view', {path:'/:teacherid'});  // /errors/:id
  });
});

export default Router;
