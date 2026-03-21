export const login = (req, res) => {
  const { email } = req.body;

  res.json({
    token: "fake-token",
    user: { email },
  });
};