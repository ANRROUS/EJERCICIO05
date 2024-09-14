document.addEventListener('DOMContentLoaded', () => {
    const commentInput = document.getElementById('comment-input');
    const submitCommentButton = document.getElementById('submit-comment');
    const commentsList = document.getElementById('comments-list');

    submitCommentButton.addEventListener('click', () => {
        const commentText = commentInput.value.trim();

        if (commentText) {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.textContent = commentText;
            commentsList.appendChild(commentElement);
            commentInput.value = '';
        }
    });
});

