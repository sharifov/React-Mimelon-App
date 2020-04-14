export const formatPrice = (x, currency) => {
  switch (currency) {
    case 'AZN':
      return x.toFixed(2).replace('.', ',');
    default:
      return x.toFixed(2);
  }
};

export const productsAPI = "http://localhost:3000/api/products";
