import { select, templates } from '../settings.js'
import utils from '../utils.js'

class Product {
  constructor(data) {
    this.data = data

    this.render()
  }

  render() {
    const generatedHTML = templates.product(this.data)

    this.element = utils.createDOMFromHTML(generatedHTML)
    console.log(this.element)
    const productsContainer = document.querySelector(
      select.containerOf.products
    )

    productsContainer.appendChild(this.element)
  }
}

export default Product
