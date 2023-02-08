const countComments = (comments) => {
  let number = 0;
  for (let index = 0; index < comments.length; index += 1) {
    number += 1;
  }
  return number;
};

export default countComments;