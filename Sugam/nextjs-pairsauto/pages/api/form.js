// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("body: ", body);

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.first || !body.last) {
    // Sends a HTTP bad request error code
    // return res.status(400).json({ data: "First or last name not found" });
    return res.status(200).json({
      data: `${body.first} ${body.last} ${body.mobile} ${body.email} ${body.caryear} ${body.makemodel} ${body.service} `,
    });
  }

  // Found the name.
  // Sends a HTTP success code
  // res.status(200).json({ data: `${body.first} ${body.last}` });

  res.status(200).json({
    data: `${body.first} ${body.last} ${body.mobile} ${body.email} ${body.caryear} ${body.makemodel} `,
  });
}
