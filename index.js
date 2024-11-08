const runIt = async (data) => {
  const req = await JSON.parse(data.body);

  return {
    message: req.inputData + ", and make it better!",
  };
};

export const handler = async (event) => {
  const result = await runIt(event);
  return result;
};

const event = {
  body: JSON.stringify({
    inputData: "Hello World, Let's update some stuff",
  }),
};

const response = await handler(event);
console.log(response);
