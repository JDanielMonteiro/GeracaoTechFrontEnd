export const productListHome = [
    {
        "id":1,
        "image":"../../../public/product-thumb-1.jpeg",
        "type":"Tênis",
        "name":"K-Swiss V8 - Masculino",
        "price":"200",
        "priceDiscount":"150,99",
        "chip":"30% OFF"
    },
    {
        "id":2,
        "image":"../../../public/product-thumb-2.jpeg",
        "type":"Tênis",
        "name":"K-Swiss V8 - Feminino",
        "price":"200",
        "priceDiscount":null,
        "chip":""
    },
    {
        "id":3,
        "image":"../../../public/product-thumb-3.jpeg",
        "type":"Tênis",
        "name":"Adidas Clássico",
        "price":"350",
        "priceDiscount":null,
        "chip":""
    },
    {
        "id":4,
        "image":"../../../public/product-thumb-4.jpeg",
        "type":"Tênis",
        "name":"Nike Run",
        "price":"250",
        "priceDiscount":"200",
        "chip":"20% OFF"
    },
    {
        "id":5,
        "image":"../../../public/product-thumb-5.jpeg",
        "type":"Tênis",
        "name":"Puma Old School",
        "price":"270",
        "priceDiscount":"200",
        "chip":"30% OFF"
    },
    {
        "id":6,
        "image":"../../../public/product-thumb-1.jpeg",
        "type":"Tênis",
        "name":"Vans Masculino",
        "price":"470",
        "priceDiscount":null,
        "chip":""
    },
    {
        "id":7,
        "image":"../../../public/product-thumb-2.jpeg",
        "type":"Tênis",
        "name":"Coturno Masculino",
        "price":"300",
        "priceDiscount":null,
        "chip":""
    },
    {
        "id":8,
        "image":"../../../public/product-thumb-3.jpeg",
        "type":"Tênis",
        "name":"Adidas K20",
        "price":"300",
        "priceDiscount":null,
        "chip":""
    },
]

export const listaImagesHome = [
    {"src": "../../../public/home-slide-1.jpeg"},
    {"src": "../../../public/home-slide-2.jpeg"},
    {"src": "../../../public/home-slide-3.jpeg"},
    {"src": "../../../public/home-slide-4.jpeg"}
]

export function orderBy(list, selectOptionOrder){
    if(selectOptionOrder?.code != null){  
        return list.sort((a, b) => {
            const precoA = a.priceDiscount ? parseFloat(a.priceDiscount) : parseFloat(a.price);
            const precoB = b.priceDiscount ? parseFloat(b.priceDiscount) : parseFloat(b.price);
            if(selectOptionOrder.code== "asc"){
                return precoB-precoA
            }else if(selectOptionOrder.code=="desc"){
                return precoA - precoB;
            }
        });
    }
    if(selectOptionOrder?.value != null){
        return list.filter(x => {
            if(x.type == selectOptionOrder.value)
                return x;        
        })
    }
    return list.sort(() => Math.random() - 0.5);
}


export const options = [
    { name: 'Maior preço', code: 'asc' },
    { name: 'Menor preço', code: 'desc' },
    { name: 'Mais relevantes', code: null }
];

export const optionsFilter1 = [
    { text: 'Blusas', value: "Blusa" },
    { text: 'Tênis', value: "Tênis" },
    { text: 'Short', value: "Short" }
];

export const productsList=[
    {
        "id":1,
        "image":"../../../public/product-thumb-1.jpeg",
        "type":"Tênis",
        "name":"K-Swiss V8 - Masculino",
        "price":"200",
        "priceDiscount":"150,99",
        "chip":"30% OFF"
    },
    {
        "id":2,
        "image":"../../../public/product-thumb-2.jpeg",
        "type":"Tênis",
        "name":"K-Swiss V8 - Feminino",
        "price":"210",
        "priceDiscount":null,
        "chip":""
    },
    {
        "id":3,
        "image":"../../../public/product-thumb-3.jpeg",
        "type":"Tênis",
        "name":"Adidas Clássico",
        "price":"350",
        "priceDiscount":null,
        "chip":""
    },
    {
        "id":4,
        "image":"../../../public/product-thumb-4.jpeg",
        "type":"Tênis",
        "name":"Nike Run",
        "price":"250",
        "priceDiscount":"200",
        "chip":"20% OFF"
    },
    {
        "id":5,
        "image":"../../../public/product-thumb-5.jpeg",
        "type":"Tênis",
        "name":"Puma Old School",
        "price":"270",
        "priceDiscount":"200",
        "chip":"30% OFF"
    },
    {
        "id":6,
        "image":"../../../public/product-thumb-1.jpeg",
        "type":"Tênis",
        "name":"Vans Masculino",
        "price":"170",
        "priceDiscount":null,
        "chip":""
    },
    {
        "id":7,
        "image":"../../../public/product-thumb-2.jpeg",
        "type":"Tênis",
        "name":"Coturno Masculino",
        "price":"300",
        "priceDiscount":null,
        "chip":""
    },
    {
        "id":8,
        "image":"../../../public/product-thumb-3.jpeg",
        "type":"Tênis",
        "name":"Adidas K20",
        "price":"320",
        "priceDiscount":null,
        "chip":""
    },,
    {
        "id":9,
        "image":"../../../public/product-thumb-2.jpeg",
        "type":"Tênis",
        "name":"K-Swiss V8 - Feminino",
        "price":"120",
        "priceDiscount":null,
        "chip":""
    },
    {
        "id":10,
        "image":"../../../public/product-thumb-3.jpeg",
        "type":"Tênis",
        "name":"Adidas Clássico",
        "price":"350",
        "priceDiscount":null,
        "chip":""
    },
    {
        "id":11,
        "image":"../../../public/product-thumb-4.jpeg",
        "type":"Tênis",
        "name":"Nike Run",
        "price":"450",
        "priceDiscount":"200",
        "chip":"20% OFF"
    },
    {
        "id":12,
        "image":"../../../public/product-thumb-5.jpeg",
        "type":"Tênis",
        "name":"Puma Old School",
        "price":"270",
        "priceDiscount":"200",
        "chip":"30% OFF"
    },
    {
        "id":13,
        "image":"../../../public/product-thumb-2.jpeg",
        "type":"Tênis",
        "name":"K-Swiss V8 - Feminino",
        "price":"100",
        "priceDiscount":null,
        "chip":""
    },
    {
        "id":14,
        "image":"../../../public/product-thumb-3.jpeg",
        "type":"Tênis",
        "name":"Adidas Clássico",
        "price":"350",
        "priceDiscount":null,
        "chip":""
    },
    {
        "id":15,
        "image":"../../../public/product-thumb-4.jpeg",
        "type":"Tênis",
        "name":"Nike Run",
        "price":"250",
        "priceDiscount":"200",
        "chip":"20% OFF"
    },
    {
        "id":16,
        "image":"../../../public/product-thumb-5.jpeg",
        "type":"Tênis",
        "name":"Puma Old School",
        "price":"280",
        "priceDiscount":"200",
        "chip":"30% OFF"
    },
    {
        "id":17,
        "image":"https://cdn.sistemawbuy.com.br/arquivos/8396f6cdc4ecfdde50f447ad12127860/produtos/64e4c5c37b2c0/10-64e4c5c407f15.jpg",
        "type":"Blusa",
        "name":"Camisa Polo",
        "price":"90",
        "priceDiscount":"80",
        "chip":"5% OFF"
    },
    {
        "id":18,
        "image":"https://attireluxe.com.br/cdn/shop/files/S46c316ea5d4649beb4eec39d35469282N_1000x.jpg?v=1692973539",
        "type":"Blusa",
        "name":"Camisa Básica",
        "price":"50",
        "priceDiscount":null,
        "chip":""
    },
    {
        "id":19,
        "image":"https://ae-pic-a1.aliexpress-media.com/kf/Se0c151ea0fb74ab99494eeffbf94b31av/Camisas-masculinas-de-linho-de-algod-o-manga-longa-blusas-casuais-para-neg-cios-camisas-sociais.jpg_640x640Q90.jpg_.webp",
        "type":"Blusa",
        "name":"Camisa de linho",
        "price":"110",
        "priceDiscount":null,
        "chip":""
    },
    {
        "id":20,
        "image":"https://anarhu.cdn.magazord.com.br/img/2023/09/produto/4448/bermuda-masculina-moletom-verde-alecrim-anarhu.jpg?ims=fit-in/635x865/filters:fill(white)",
        "type":"Short",
        "name":"Bermuda Moleton",
        "price":"180",
        "priceDiscount":"150",
        "chip":"30% OFF"
    },
    {
        "id":21,
        "image":"https://acdn.mitiendanube.com/stores/002/368/707/products/bermudas_masculina_surf_elastic_praia_sol_mar11-8dc9d30507b9050a7d16617234213514-1024-1024.jpg",
        "type":"Short",
        "name":"Short de praia",
        "price":"210",
        "priceDiscount":null,
        "chip":""
    },
    {
        "id":22,
        "image":"https://storetng.vteximg.com.br/arquivos/ids/471461-1200-1643/V23MBJE13_771_1-BERMUDA-JEANS-SLIM-MASCULINA.jpg?v=638379000953470000",
        "type":"Short",
        "name":"Bermuda Jeans",
        "price":"350",
        "priceDiscount":null,
        "chip":""
    }
 ];