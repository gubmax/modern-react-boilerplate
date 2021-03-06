export enum HttpRequestMethods {
  GET = 'GET',
  // HEAD = 'HEAD',
  // POST = 'POST',
  // PUT = 'PUT',
  // DELETE = 'DELETE',
  // CONNECT = 'CONNECT',
  // OPTIONS = 'OPTIONS',
  // TRACE = 'TRACE',
  PATCH = 'PATCH',
}

export enum ApiRoutes {
  RENDER = '*',
  CART_PRODUCTS = '/api/cart/products',
  CART_AMOUNT = '/api/cart/amount',
}
