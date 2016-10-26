import Ember from 'ember';

export default Ember.Component.extend({

  paragraphs: Ember.computed('post.body', function() {
    return this.get('post.body').split('<br>');
  }),

  preview: Ember.computed('post.body', function() {
    var words = this.get('post.body').split('<br>').join(' ').split(' ');
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + '...';
    } else {
      return words.join(' ');
    }
  })
});
