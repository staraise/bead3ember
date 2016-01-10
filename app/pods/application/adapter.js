import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'https://bead3restapi-staraise.c9users.io',
    namespace: ''
});
