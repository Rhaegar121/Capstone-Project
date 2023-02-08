import { getComment } from "./util";

const countComments = async (id) => {
    const comments = await getComment(id);
    console.log(comments)
    let number = 0;
    for (let index = 0; index < comments.length; index++) {
        number++; 
    }
    return number;
}

export default countComments;