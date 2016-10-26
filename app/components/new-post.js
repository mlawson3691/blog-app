import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        image: this.get('image'),
        date: this.get('date')
      };
      this.set('title', '');
      this.set('body', '');
      this.set('image', '');
      this.set('date', '');
      this.sendAction('savePost', params);
    }
  }
});
