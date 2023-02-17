import { select, templates } from '../settings.js'
import utils from '../utils.js'

class Product {
  constructor(id, data) {
    this.id = id
    this.data = data

    this.render()
  }

  render() {
    const generatedHTML = templates.product({
      title: this.data.title,
      description: this.data.description,
    })

    this.element = utils.createDOMFromHTML(generatedHTML)
    console.log(this.element)
    const productsContainer = document.querySelector(
      select.containerOf.products
    )

    productsContainer.appendChild(this.element)
  }
}

export default Product
