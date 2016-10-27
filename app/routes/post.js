import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },

  actions: {
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          post.set(key, params[key]);
        }
      });
      post.save();
    },
    destroyPost(post) {
      var commentsToDelete = post.get('comments').map(function(comment) {
        return comment.destroyRecord();
      });
      Ember.RSVP.all(commentsToDelete).then(function() {
        return post.destroyRecord();
      });
      this.transitionTo('index');
    },
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('post', post);
    },
    destroyComment(comment) {
      var post = comment.post;
      comment.destroyRecord();
      this.transitionTo('post', post.id);
    }
  }
});
