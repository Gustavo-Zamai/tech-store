export interface Sale {
  id: string
  customerId: string
  employeeId: string
  items: {
    productId: string
    quantity: number
  }[]
  total: number
  date: string
  paymentMethod: string
}