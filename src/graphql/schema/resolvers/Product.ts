import type { ProductResolvers } from "./../../types.generated";
export const Product: ProductResolvers = {
  async coverImage(parent, _args, ctx) {
    const image = await ctx.prisma.image.findUnique({
      where: { productId: parent.id },
    });
    return image || null;
  },
};
