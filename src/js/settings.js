export const select = {
  templateOf: {
    product: '#template-product',
  },
  containerOf: {
    pages: '#pages',
    products: '#product-list',
  },
  nav: {
    links: '.main-nav a',
  },
}

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
}

export const activatedSections = {
  home: ['about', 'products'],
  products: ['products'],
  contact: ['contact'],
}

export const settings = {
  db: {
    url:
      '//' +
      window.location.hostname +
      (window.location.hostname == 'localhost' ? ':3131' : ''),
    products: 'products',
  },
}

export const templates = {
  product: Handlebars.compile(
    document.querySelector(select.templateOf.product).innerHTML
  ),
}
