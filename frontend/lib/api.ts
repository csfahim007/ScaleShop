export async function addToCart(productId: string, quantity: number) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId, quantity }),
  });
  return response.json();
}

export async function updateInventory(productId: string, quantity: number) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/inventory`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId, quantity }),
  });
  return response.json();
}