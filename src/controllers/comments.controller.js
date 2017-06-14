

function CommentsController(){
    this.$addCommentForm = $('.add-comment')
    this.$imageID = $('#image ul data-id')
  }



  CommentsController.prototype.addCommentFormListener = function(){
    this.$addCommentForm.on('submit',function(event){
      event.preventDefault();

      let imageId = this.dataset.id
      let comment =($(`#comment-description-${imageId}`).val())
      newComment = new Comment(comment, imageId)

      // $('.image ul ').append(newComment.commentEl());
      $(`#comments-${imageId}`).append(newComment.commentEl());
    });
  };



CommentsController.prototype.init = function() {
  this.addCommentFormListener();

};
