module.exports = {
  count: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.category.count(ctx.query);
    }
    return strapi.services.category.countSearch(ctx.query);
  },
};