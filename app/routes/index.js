import Ember from 'ember';

export default Ember.Route.extend({
  postsToShow: 2,
  postCount: 3,
  showMore: true,

  model() {
    return this.store.query('post',
      {orderBy: 'date',
      limitToLast: this.get('postsToShow')
    }).then(function(posts) {
      var allPosts = posts.toArray().reverse();
      return allPosts;
    });
  },

  actions: {
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },
    loadMore(newPostsToShow) {
      this.set('postsToShow', newPostsToShow);
      this.refresh();
    }
  }
});
