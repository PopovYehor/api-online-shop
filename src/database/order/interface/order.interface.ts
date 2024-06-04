import { interfaceCatalogItem } from './../../catalog/interfaces/catalogInterface';
export interface Order {
    cart: [interfaceCatalogItem],
    deliveryAddres: string,
    deliveryType: string,
    email: string,
    name: string,
    paymentType: string,
    phone: string
}
