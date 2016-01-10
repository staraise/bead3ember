import Ember from 'ember';

export default Ember.Component.extend({
    errors: Ember.Object.create(),
    hasErrors: false,
    selectedItem: 'semmi',
    
    
    actions: {
        submit(){  // submit gomb megnyomására ez a függvény fut le
            //console.log('faintos szoveg')  // submit actionra kiírja ezt
            
            if(!this.validate()){
                return;
            }
            
            this.get('onSave')({    // kívülről kapott függvény, visszadja a kitöltött mezők adatait
                name: this.$('#nev').val(),
                credit: this.$('#kredit').val(),
                description: this.$('#leiras').val(),
                teacherid : this.selectedItem,
            });  
        }
    },
    
    validate() {
        var name = this.$('#nev').val();   // adatbeolvasása
        var description = this.$('#leiras').val();
        var selectCtrl = document.getElementById("valasztott");
        this.selectedItem = selectCtrl.options[selectCtrl.selectedIndex].value;
        this.set('errors.name', name === '' ? 'Helyszín kötelező' : '');
        this.set('errors.description', description === '' ? 'Leírás kötelező' : '');
        
        return this.get('errors.name') === '' && this.get('errors.description') === '';
    }
    
});
