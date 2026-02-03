export function calculatePrice(product: { id?: number; name?: string; image_url?: string; weight: any; karat: any; labor_cost?: number | undefined; }, goldPrices: { [x: string]: any; }) {
  const pricePerGram = goldPrices[product.karat]; 
  return product.weight * (product.karat / 24) * pricePerGram;
}