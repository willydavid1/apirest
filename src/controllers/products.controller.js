import Product from '../models/Product'

export const createProduct = async (req, res) => {
  const { name, category, price, imgURL } = req.body

  const newProduct = new Product({
    name,
    category,
    price,
    imgURL
  })
  const productSaved = await newProduct.save()
  res.status(201).json(productSaved)
}

export const getProducts = async (req, res) => {
  const products = await Product.find()
  res.json(products)
}

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId)
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ error: 'Error' })
  }
}

export const updateProductById = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
    new: true
  })
  res.status(200).json(updatedProduct)
}

export const deleteProductById = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.productId)
    res.status(200).json({ deleted: 'true', deletedProduct })
  } catch (error) {
    res.status(500).json({ error: 'Error' })
  }
}
