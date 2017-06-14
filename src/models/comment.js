// create Comment class here
function Comment(comment, imageID) {
  this.id = (Comment.all.length + 1) ;
  this.commentContent = comment;
  this.imageObj = this.findImage(imageID)
  Comment.all.push(this);
}



Comment.prototype.findImage = function(imageId) {
    Image.all[imageId].comments.push(this.commentContent)
    return Image.all[imageId]
};

Comment.prototype.commentEl = function() {
  // does id need to be an integer?
  return `<li id="${this.id}"> ${this.commentContent}</li><br>`;

};

Comment.all = [];
