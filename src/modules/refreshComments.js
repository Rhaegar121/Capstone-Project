import { getComment } from './util.js';

const refreshComment = async (id) => {
  const gotComment = await getComment(id);
  //
  console.log(gotComment);
};

export default refreshComment;