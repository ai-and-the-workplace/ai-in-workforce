import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: req.body.prompt,
    temperature: 0.7,
    max_tokens: 1500,
  });

  res.status(200).json({ response: completion.data.choices[0].text });
}
