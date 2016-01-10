import Ember from 'ember';

export default Ember.Component.extend({
    errors: Ember.Object.create(),
    hasErrors: false,
    
    
    actions: {
        submit(){  // submit gomb megnyomására ez a függvény fut le
            
            if(!this.validate()){
                return;
            }
            
            this.get('onSave')({    // kívülről kapott függvény, visszadja a kitöltött mezők adatait
                firstname: this.$('#firstname').val(),
                lastname: this.$('#lastname').val(),
                phonenumber: this.$('#phonenumber').val(),
                emailaddress: this.$('#emailaddress').val()
            });  
        }
    },
    
    validate() {
        var firstname = this.$('#firstname').val();   // adatbeolvasása
        var lastname = this.$('#lastname').val();
        
        this.set('errors.firstname', firstname === '' ? 'Keresztnév megadása kötelező' : '');
        this.set('errors.lastname', lastname === '' ? 'Vezetéknév megadása kötelező' : '');
        
        return this.get('errors.firstname') === '' && this.get('errors.lastname') === '';
    }
    
});
