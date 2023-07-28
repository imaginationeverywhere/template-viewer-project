const extendedTemplates = require("../../data/extendedTemplate.json");
const totalCount = extendedTemplates.length;

module.exports = async (req, res, next) => {
  try {
    const limit = 4;
    const pages = Math.ceil(totalCount / limit);
    const { page = 1 } = req.query;

    const skip = (page - 1) * limit;
    const data = extendedTemplates.slice(skip, page * limit);

    const meta = { pages, count: totalCount, currentPage: page };
    return res.status(200).json({ message: "Success", data, meta });
  } catch (error) {
    next(error);
  }
};
