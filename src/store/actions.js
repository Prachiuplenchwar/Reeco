export const approveProduct = (productId) => {
    return {
      type: 'APPROVE_PRODUCT',
      payload: productId,
    };
  };
  
  export const markMissingProduct = (productId, reason) => {
    return {
      type: 'MARK_MISSING_PRODUCT',
      payload: { productId, reason },
    };
  };
  
  export const editProduct = (productId, updatedProduct) => {
    return {
      type: 'EDIT_PRODUCT',
      payload: { productId, updatedProduct },
    };
  };