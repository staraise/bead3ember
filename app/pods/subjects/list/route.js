import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.store.findAll('subject');
    },
    setupController: function(controller,model){
        this._super(controller,model);
        controller.set('tanar',this.store.findAll('teacher'));
    }
});

