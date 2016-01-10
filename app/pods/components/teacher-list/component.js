import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteTeacher(teacher) {
            teacher.deleteRecord();
            teacher.save();   // a változást is mentse el az adatbázisban
        }
    }
});
