
export const sendPayment = (req, res) => {
  const { sender, receiver, amount } = req.body;

  // Dummy validation
  if (!sender || !receiver || !amount) {
    return res.status(400).json({ success: false, message: 'Missing fields' });
  }

  // Dummy response
  res.status(200).json({
    success: true,
    message: `Payment of ${amount} sent from ${sender} to ${receiver}`
  });
};
