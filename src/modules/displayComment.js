import { getComment } from './util.js';
import countComments from './commentCounter.js';

const updateComment = async (id) => {
  // get comments and number of comments
  // await refreshComment(id);
  const gotComment = await getComment(id);
  const commentsNo = await countComments(id);

  const commentSection = document.querySelector('h3');
  commentSection.innerHTML = `
    Comments (${commentsNo})
    `;

  const comments = document.querySelector('.comments');
  let innertext = '';
  if (!(gotComment.error)) {
    gotComment.forEach((data) => {
      innertext += `
            <p>${data.creation_date} ${data.username}: ${data.comment}</p>
            `;
    });
    comments.innerHTML = innertext;
  }
};

export default updateComment;
