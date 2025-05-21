export default function Success() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Thank You for Your Purchase!</h1>
      <p>Your order has been successfully placed. You'll receive a confirmation email soon.</p>
      <a href="/" className="text-blue-500 underline">Continue Shopping</a>
    </div>
  );
}