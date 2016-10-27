import Ember from 'ember';

export default Ember.Route.extend({
  postsToShow: 1,

  model() {
    return this.store.query('post',
      {orderBy: 'date',
      limitToFirst: this.get('postsToShow')
    });
  },

  actions: {
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },
    loadMore() {
      var currentCount = this.get('postsToShow');
      currentCount++;
      this.set('postsToShow', currentCount);
      this.refresh();
    }
  }
});
