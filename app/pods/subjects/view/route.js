import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
    //return this.error.find('id', params.id);
    console.log(params);
    var cerror = this.store.find('teacher', params.teacherid); 
    return cerror;
  }
});
