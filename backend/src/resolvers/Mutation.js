const Mutations = {
  async createProduct(parent, args, ctx, info) {
    // TUDO: Check if they are logged in

    const product = await ctx.db.mutation.createProduct({
      data: {
        ...args
      }
    }, info)

    return product;
  }
};

module.exports = Mutations;