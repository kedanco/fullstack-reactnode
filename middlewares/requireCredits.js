module.exports = (req, res, next) => {
	if (req.user.credits < 1) {
		//400-499 error-related status codes
		return res.status(403).send({ error: "Not enough credits!" });
	}
};
