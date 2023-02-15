import { classNames, select } from './settings.js'

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

  init: function () {
    this.initPages()
  },
}

app.init()
