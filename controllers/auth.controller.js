export const login = (req, res) => {
  const { email, password } = req.body;
  res.status(200).json({ email, password });
};

export const register = (req, res) => {
  const { email, password } = req.body;
  res.status(200).json({ email, password });
};
