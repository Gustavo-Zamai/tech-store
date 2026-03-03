export interface Sale {
  id: number
  customerId: number
  employeeId: number
  items: {
    productId: number
    quantity: number
  }[]
  total: number
  date: string
  paymentMethod: string
}