import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
  organization: 'org-cG8v7KHm9fZXWN8NkF4FvXZK',
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
