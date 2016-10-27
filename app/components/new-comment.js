import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    saveComment() {
      var params = {
        body: this.get('body'),
        author: this.get('author'),
        date: this.get('date'),
        post: this.get('post')
      };
      console.log(this.get('date'));
      this.set('body', '');
      this.set('author', '');
      this.set('date', '');
      this.sendAction('saveComment', params);
    }
  }
});
