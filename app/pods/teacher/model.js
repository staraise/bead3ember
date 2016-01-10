import DS from 'ember-data';


// modellek megadása, ezekből a mezőkből fog állni, ()-on belül típust is lehet adni neki
// id-t nem kell feltüntetni itt
const teacherModel = DS.Model.extend({
    firstname: DS.attr(),
    lastname: DS.attr(),
    phonenumber: DS.attr(),
    emailaddress: DS.attr(),
    fullName: function() {
    return this.get('lastname') + ' ' + this.get('firstname');
  }.property('firstname', 'lastname')
});

/*ErrorModel.reopenClass({
    FIXTURES: [
        {
            id: 1,
            date: '1212-12-21',
            location: 'pc6',
            description: 'rossz'
        },
        {
            id: 2,
            date: '2212-12-21',
            location: 'pc7',
            description: 'még rosszabb'
        },
    ]
})*/
// változót exportáljuk
export default teacherModel;
