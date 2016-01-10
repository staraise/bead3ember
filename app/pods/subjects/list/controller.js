import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newSubject(formData) {
            console.log(formData);
            var subject = this.store.createRecord('subject', Object.assign({  // error modelben adjuk meg az objektumot
                date: Date.now().toString(),  // alapértékek adása az adattagoknak
                name: 'labor',
                description: 'hiba',
                credit: '1',
                teacherid: 'vmi',
            }, formData));  // formData - ami bejön a formon érték az felül írja az alapértéket
            subject.save();
        }
    }
});