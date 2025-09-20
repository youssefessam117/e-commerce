
export interface IProduct {
    sold: number;
    images: string[];
    subcategory: SubCategory[];
    ratingsQuantity: number;
    _id: string;
    title: string;
    slug: string;
    description: string;
    quantity: number;
    price: number;
    priceAfterDiscount: number;
    imageCover: string;
    category: Category;
    brand: Brand;
    ratingsAverage: number;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    __v: number;
    reviews: Review[];
    id: string;
}

interface SubCategory {
    _id: string;
    name: string;
    slug: string;
    category: string;
}

interface Category {
    _id: string;
    name: string;
    slug: string;
    image: string;
}

interface Brand {
    _id: string;
    name: string;
    slug: string;
    image: string;
}

interface Review {
    // currently empty, define when reviews structure is known
}





export interface CartData {
    _id: string;
    cartOwner: string;
    products: CartProduct[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    totalCartPrice: number;
}

export interface CartProduct {
    count: number;
    _id: string;
    product: Product;
    price: number;
}

export interface Product {
    subcategory: SubCategory[];
    _id: string;
    title: string;
    quantity: number;
    imageCover: string;
    category: Category;
    brand: Brand;
    ratingsAverage: number;
    id: string;
}






