const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './html/APrices.html': path.resolve(__dirname, 'template/js/components/APrices.html'),
      './js/APrices.js': path.resolve(__dirname, 'template/js/components/APrices.js'),
      './html/TheProduct.html': path.resolve(__dirname, 'template/js/components/TheProduct.html'),
      './js/TheProduct.js': path.resolve(__dirname, 'template/js/components/TheProduct.js'),
      './html/ProductCard.html': path.resolve(__dirname, 'template/js/components/ProductCard.html'),
      './js/ProductCard.js': path.resolve(__dirname, 'template/js/components/ProductCard.js'),
      './html/ProductGallery.html': path.resolve(__dirname, 'template/js/components/ProductGallery.html'),
      './js/DiscountApplier.js': path.resolve(__dirname, 'template/js/components/DiscountApplier.js'),
      './../lib/fix-item-final-price': path.resolve(__dirname, 'template/js/custom-js/fix-item-final-price.js')
    }
  }
})
