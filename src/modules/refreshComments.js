import { getComment } from './util';

const refreshComment = async (id) => {
  const gotComment = await getComment(id);
  //
  console.log(gotComment);
};

export default refreshComment;