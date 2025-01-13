import BandSiteApi from './band-site-api.js';

const commentsSection = document.querySelector('.comments__section');
const commentsForm = document.querySelector('.comments__input-info-form');

/**
 * Create a comment element
 * @param {Object} comment - Comment object from the API
 * @returns {HTMLElement} The comment DOM element
 */
function createCommentElement(comment) {
  const commentDiv = document.createElement('div');
  commentDiv.classList.add('comments__new');

  // Avatar placeholder
  const avatar = document.createElement('div');
  avatar.classList.add('comments__new-image');
  commentDiv.appendChild(avatar);

  // Content container
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('comments__container');
  commentDiv.appendChild(contentDiv);

  // Name and timestamp
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('comments__header');
  contentDiv.appendChild(headerDiv);

  const name = document.createElement('h2');
  name.classList.add('comments__new-name');
  name.innerText = comment.name;
  headerDiv.appendChild(name);

  const timestamp = document.createElement('aside');
  timestamp.classList.add('comments__new-time');
  timestamp.innerText = new Date(comment.timestamp).toLocaleDateString();
  headerDiv.appendChild(timestamp);

  // Comment text
  const commentText = document.createElement('p');
  commentText.classList.add('comments__new-comment');
  commentText.innerText = comment.comment;
  contentDiv.appendChild(commentText);

  // Action icons container
  const actionsDiv = document.createElement('div');
  actionsDiv.classList.add('comments__new-actions');
  contentDiv.appendChild(actionsDiv);

  // Delete icon
  const deleteIcon = document.createElement('img');
  deleteIcon.classList.add('comments__new-actions__delete');
  deleteIcon.src = '../assets/Icons/SVG/icon-delete.svg';
  deleteIcon.alt = 'Delete';
  deleteIcon.addEventListener('click', () => deleteComment(comment.id, commentDiv));
  actionsDiv.appendChild(deleteIcon);

  // Like icon
  const likeIcon = document.createElement('img');
  likeIcon.classList.add('comments__new-actions__like');
  likeIcon.src = '../assets/Icons/SVG/icon-like.svg';
  likeIcon.alt = 'Like';
  likeIcon.addEventListener('click', () => likeComment(comment.id, likeCount));
  actionsDiv.appendChild(likeIcon);

  // Like count
  const likeCount = document.createElement('span');
  likeCount.classList.add('comments__new-actions__like-count');
  likeCount.innerText = `(${comment.likes})`;
  actionsDiv.appendChild(likeCount);

  return commentDiv;
}

/**
 * Load and display comments
 */
async function loadComments() {
  try {
    const comments = await BandSiteApi.getComments();
    commentsSection.innerHTML = '';
    comments
      .sort((a, b) => b.timestamp - a.timestamp)
      .forEach((comment) => {
        const commentElement = createCommentElement(comment);
        commentsSection.appendChild(commentElement);
      });
  } catch (error) {
    console.error('Error loading comments:', error);
    alert('Failed to load comments. Please try again later.');
  }
}

/**
 * Submit a new comment
 * @param {Event} event - Form submit event
 */
async function submitComment(event) {
  event.preventDefault();

  const nameInput = event.target.name.value.trim();
  const commentInput = event.target.comment.value.trim();

  if (!nameInput || !commentInput) {
    alert('Both name and comment are required.');
    return;
  }

  const newComment = { name: nameInput, comment: commentInput };

  try {
    await BandSiteApi.postComment(newComment);
    loadComments();
    commentsForm.reset();
  } catch (error) {
    console.error('Error submitting comment:', error);
    alert('Failed to post comment. Please try again later.');
  }
}

/**
 * Like a comment
 * @param {string} commentId - ID of the comment to like
 * @param {HTMLElement} likeCount - The like count span element
 */
async function likeComment(commentId, likeCount) {
  try {
    await BandSiteApi.likeComment(commentId);
    const updatedLikes = parseInt(likeCount.innerText.replace(/[()]/g, ''), 10) + 1;
    likeCount.innerText = `(${updatedLikes})`; // Update like count display
  } catch (error) {
    console.error('Error liking comment:', error);
    alert('Failed to like the comment. Please try again later.');
  }
}

/**
 * Delete a comment
 * @param {string} commentId - ID of the comment to delete
 * @param {HTMLElement} commentDiv - The comment DOM element
 */
async function deleteComment(commentId, commentDiv) {
  try {
    await BandSiteApi.deleteComment(commentId);
    commentDiv.remove();
  } catch (error) {
    console.error('Error deleting comment:', error);
    alert('Failed to delete the comment. Please try again later.');
  }
}

// Event listener for comment submission
commentsForm.addEventListener('submit', submitComment);

// Initial load of comments
loadComments();
