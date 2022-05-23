function append(){
    var pro= JSON.parse(localStorage.getItem("products")) || [];
    var all_products = document.getElementById("all_products");
    pro.forEach(function(el){
        var div= document.createElement("div")
        var img= document.createElement("img");

        img.src=el.image;
        var h2= document.createElement("h2")
        h2.innerText=el.type
        var p= document.createElement("p");
        p.innerText=el.desc
        var h3 = document.createElement("h3")
        h3.innerText=el.price
        var button= document.createElement("button");
        button.innerText="Remove products"
        div.append(img, h2, p,h3)
        all_products.append(div)

    })
}
append();