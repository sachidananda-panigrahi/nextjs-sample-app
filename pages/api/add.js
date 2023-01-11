import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { num1, num2 } = req.query;
  if (parseInt(num1) === 13 || parseInt(num1) === 21) {
    setTimeout(() => {
      res.status(200).json({ sum: parseInt(num1) + parseInt(num2) });
    }, 10000);
  } else {
    res.status(200).json({ sum: parseInt(num1) + parseInt(num2) });
  }
}
