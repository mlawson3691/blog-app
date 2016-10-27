import Ember from 'ember';

export default Ember.Component.extend({
  newComment: false,
  actions: {
    startComment() {
      this.set('newComment', true);
    },
    cancelComment() {
      this.set('newComment', false);
    },
    saveComment() {
      var params = {
        body: this.get('body'),
        author: this.get('author'),
        date: this.get('date'),
        post: this.get('post')
      };
      this.set('newComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
