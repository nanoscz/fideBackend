
const sideMenu = [
  {
    group: '',
    items: [
      // { label: 'Dashboard', link: '/dashboard', icon: 'ionicons:speedometer-outline' },
      { label: 'Pedidos', link: '/sale', icon: 'ionicons:receipt-outline' }
    ]
  },
  {
    group: 'Administración',
    items: [
      { label: 'Clientes', link: '/client', icon: 'ionicons:people-outline' },
      { label: 'Usuarios', link: '/user', icon: 'ionicons:person-outline' },
      { label: 'Categorias', link: '/category', icon: 'ionicons:pricetags-outline' }
    ]
  },
  {
    group: 'Almacén',
    items: [
      { label: 'Productos', link: '/product', icon: 'ionicons:layers-outline' }
    ]
  },
  {
    group: 'Reportes',
    items: [
      { label: 'Reportes', link: '/stats', icon: 'ionicons:grid-outline' }
    ]
  }
]

module.exports = sideMenu
