const runIt = async (data) => {
  const req = await JSON.parse(data.body);

  return {
    message: "Let's update this with..." + req.inputData,
  };
};

export const handler = async (event) => {
  const result = await runIt(event);
  return result;
};

// const event = {
//   body: JSON.stringify({
//     inputData: "an update",
//   }),
// };

// const response = await handler(event);
// console.log(response);
