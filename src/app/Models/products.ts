export interface Products{
    sku : string;
    productImage : string;
    productName : string;
    subcategory_id : string;
    shortDescription : Text;
    longDescription : Text;
    price : number;
    discountPrice : number;
    options : string;
    active : boolean;


}
export default Products;