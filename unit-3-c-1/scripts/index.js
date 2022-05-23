//store the products array in localstorage as "products"
function products(t,d,p,i){
    this.type= t;
    this.desc= d;
    this.price= p;
    this.image= i;
}
function product(event){
    event.preventDefault()
    var form = document.getElementById("products");
    var type =form.type.value;
    var desc = form.desc.value;
    var price= form.price.value;
    var image= form.image.value;
    var p=  new products(type, desc, price, image)
 
    var pro= JSON.parse(localStorage.getItem("products")) || [];
    pro.push(p);
    localStorage.setItem("products", JSON.stringify(pro));
    console.log(pro)
}
                                                                                                                                                                                         