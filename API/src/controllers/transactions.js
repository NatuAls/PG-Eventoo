const { Event, } = require("../db");

//get. de usuarios logeados uno devuelve
const createTransaction = async (req, res) => {
    try {
    const { isPaid, payment_proof } = req.body;
    const buyerId = req.userId;

    if (!isPaid || !payment_proof) {
        return res
          .status(400)
          .json({ error: "The payment status and the payment proof are mandatory fields" });
      }
      
      const transactionFromDB = await Transaction.create({ isPaid, payment_proof, buyerId }).catch((e) => {
        return res.status(500).json({
          error: {
            message: "Error while creating resource",
            values: { ...req.body },
          },
        });
      });
      
      await transactionFromDB.setBuyer(buyerId);
      return res.status(200).json({ transaction: transactionFromDB });
} catch (err) {
return res.status(401).json({ error: "Failed to create a new transaction" });
}
};

      

module.exports = { 
    createTransaction,
};