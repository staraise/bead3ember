import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newTeacher(formData) {
            console.log(formData);
            var teacher = this.store.createRecord('teacher', Object.assign({  // error modelben adjuk meg az objektumot
                firstname: 'a',  // alapértékek adása az adattagoknak
                lastname: 'a',
                phonenumber: 'a',
                emailaddress: 'a@a.hu',
            }, formData));  // formData - ami bejön a formon érték az felül írja az alapértéket
            teacher.save();
           // this.transitionToRoute('errors.list')  // ugyanazon az oldalon vagyunk, ezért nem kell
        }
    }
});
