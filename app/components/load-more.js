import Ember from 'ember';

export default Ember.Component.extend({
  showMore: true,
  postsToShow: 2,

  actions: {
    loadMore(postCount) {
      var currentCount = this.get('postsToShow');
      currentCount += 2;
      this.set('postsToShow', currentCount);
      if (this.get('postsToShow') >= postCount) {
        this.set('showMore', false);
      }
      this.sendAction('loadMore', this.get('postsToShow'));
    }
  }
});
