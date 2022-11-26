


const store = () => {
  const products = []
  return {
    addProduct(item) {
      products.push(item)
    },
    removeProduct(item) {
      products.splice(item, 1)
    },
    listProducts() {
      return products
    }
  }
}

const myStore = store()

myStore.addProduct("hola")
myStore.addProduct("adios")
myStore.removeProduct('hola')
console.log(myStore.listProducts())
