import Ember from 'ember';

export default Ember.Component.extend({
  paragraphs: Ember.computed('post.body', function() {
    return this.get('post.body').split('<br>');
  }),
  editPost: false,

  actions: {
    editPost() {
      this.set('editPost', true);
    },
    update(post, params) {
      this.set('editPost', false);
      this.sendAction('update', post, params);
    },
    delete(post) {
      this.sendAction('destroyPost', post);
    }
  }
});
