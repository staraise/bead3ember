import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyError(formData) {
            console.log(formData);
            var error = this.get('model');
            error.setProperties(formData);  // előző két sort ezzel az eggyel is le lehet írni
            return error.save().then(() => {
                this.transitionToRoute('teachers.list');
            })
        }
    }
});
