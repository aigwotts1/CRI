export const money = n => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(n);
export function totals(lines, discount = 0, tax = 0) {
  const subtotal = Math.round(lines.reduce((s, l) => s + l.price * l.quantity, 0) * 100) / 100;
  if (!Number.isFinite(discount) || discount < 0 || discount > subtotal) throw Error('Discount must be between zero and the subtotal.');
  if (!Number.isFinite(tax) || tax < 0 || tax > 100) throw Error('Tax must be between 0 and 100%.');
  const taxAmount = Math.round((subtotal - discount) * tax) / 100;
  return { subtotal, discount, tax, taxAmount, total: Math.round((subtotal - discount + taxAmount) * 100) / 100 };
}
export function validateCart(cart, inventory) {
  if (!cart.length) throw Error('Add at least one item to the bill.');
  return cart.map(line => {
    const item = inventory.find(i => i.id === line.id);
    if (!item || !Number.isInteger(line.quantity) || line.quantity < 1 || line.quantity > item.stock) throw Error('Check item quantities and available stock.');
    return { id: item.id, name: item.name, sku: item.sku, price: item.price, quantity: line.quantity };
  });
}
