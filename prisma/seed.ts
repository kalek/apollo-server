import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const productsCount = 5;

for (let i = 0; i < productsCount; i++) {
  const name = faker.commerce.productName();

  const createdProduct = await prisma.product.create({
    data: {
      name: name,
      price: Number(faker.commerce.price()) * 100,
      category: faker.commerce.department(),
    },
  });
  const newImage = await prisma.image.create({
    data: {
      src: 'https://images.unsplash.com/photo-1693418161641-99928097b5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      alt: 'photo alt',
      productId: createdProduct.id,
    },
  });
  await prisma.product.update({
    where: {
      id: createdProduct.id,
    },
    data: {
      coverImage: {
        connect: {
          id: newImage.id,
        },
      },
    },
  });
  console.log(`Created product with id: ${createdProduct.id}`);
}
