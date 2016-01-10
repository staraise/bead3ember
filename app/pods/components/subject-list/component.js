import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteSubject(subject) {
            subject.deleteRecord();
            subject.save();   // a változást is mentse el az adatbázisban
        }
    }
});
