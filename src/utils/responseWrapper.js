export const error = {
  UNDEFINED_ERROR: 'A undefined error occurred',
  PRODUCT_NOT_FOUND: 'The product was not found',
}
/**
 * Uses a wrapper to force a standard response style
 */
export default (data = null, error = false) => {
  return {
    data,
    error,
  }
}