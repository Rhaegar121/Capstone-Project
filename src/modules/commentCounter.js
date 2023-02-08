import { getComment } from './util.js';

const countComments = async (id) => {
  const comments = await getComment(id);
  let number = 0;
  for (let index = 0; index < comments.length; index += 1) {
    number += 1;
  }
  return number;
};

export default countComments;