import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(post) {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        image: this.get('image'),
        date: this.get('date')
      };
      this.sendAction('update', post, params);
    },
    cancelEdit() {
      this.sendAction('cancelEdit');
    }
  }
});
