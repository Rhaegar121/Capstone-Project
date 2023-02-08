import { getComment } from "./util.js"
import countComments from "./commentCounter.js";

const updateComment = async (id) => {

    // get comments and number of comments
    const commentsNo = await countComments(id)
    const gotComment = await getComment(id)
    console.log(gotComment)

    const commentSection = document.querySelector('h3');
    commentSection.innerHTML = `
    Comments (${commentsNo})
    `;

    const comments = document.querySelector('.comments')
    let innertext = '';
    if (gotComment.error) {
        console.log('No Comment found')
    } else {
        gotComment.forEach(data => {
            const { comment, creation_date, username } = data;
            innertext += `
            <p>${creation_date} ${username}: ${comment}</p>
            `;
        });
        comments.innerHTML = innertext;
    } 
}

export default updateComment;
