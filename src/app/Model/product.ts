export interface Product {
    message: string
    prodEntity: {
        productId: number
        productName: string;
        shortDescription: string;
        detailedDescription: string;
        category: string;
        price: string;
    }
}