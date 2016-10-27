import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(comment) {
      this.sendAction('destroyComment', comment);
    }
  }
});
