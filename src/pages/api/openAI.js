const axios = require('axios');

const prompt = 'Hello, how are you?';
const url = 'https://api.openai.com/v1/engines/<engine-id>/completions';
const data = {
  prompt: prompt,
  temperature: 0.7,
  max_tokens: 50,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
  stop: '\n',
};
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.API_KEY}`,
};

axios
  .post(url, data, { headers: headers })
  .then((response) => {
    console.log(response.data.choices[0].text);
  })
  .catch((error) => {
    console.log(error);
  });
