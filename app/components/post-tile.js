import Ember from 'ember';

export default Ember.Component.extend({

  paragraphs: Ember.computed('post.body', function() {
    return this.get('post.body').split('<br>');
  }),

  preview: Ember.computed('post.body', function() {
    var words = this.get('post.body').split(' ');
    var preview = '';
    if (words.length > 30) {
      preview = words.slice(0, 30).join(' ') + '...';
    } else {
      preview = words.join(' ');
    }
    return preview.split('<br>');
  })
});
