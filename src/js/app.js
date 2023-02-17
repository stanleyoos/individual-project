import Product from './components/Product.js'
import { classNames, select, settings } from './settings.js'

const app = {
  initPages: function () {
    const thisApp = this

    this.pages = document.querySelector(select.containerOf.pages).children

    this.navLinks = document.querySelectorAll(select.nav.links)

    const idFromHash = window.location.hash.replace('#/', '')

    let pageMatchingHash = thisApp.pages[0].id

    for (let page of this.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id
        break
      }
    }

    this.activatePage(pageMatchingHash)

    for (let link of this.navLinks) {
      link.addEventListener('click', function (e) {
        e.preventDefault()
        const clickedElement = this

        const id = clickedElement.getAttribute('href').replace('#', '')

        thisApp.activatePage(id)

        window.location.hash = '#/' + id
      })
    }
  },

  activatePage: function (pageId) {
    const thisApp = this

    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId)
    }
  },

  initData: function () {
    this.products = {}

    const url = settings.db.url + '/' + settings.db.products

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.products = data

        this.initProducts()
      })
  },

  initProducts: function () {
    for (let productData in this.products) {
      new Product(this.products[productData].id, this.products[productData])
    }
  },

  init: function () {
    this.initPages()
    this.initProducts()
    this.initData()
  },
}

app.init()
