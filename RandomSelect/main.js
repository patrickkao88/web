var pic = [
    "https://stockx.imgix.net/products/streetwear/Supreme-x-Louis-Vuitton-Box-Logo-Hooded-Sweatshirt-Red.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1553700708",
    "https://cf.shopee.tw/file/362747ef89f18d33c7d3fa83eb7c70a0",
    "http://www2.cool-style.com.tw/cool/2017/05/palace-skateboards-1.jpg",
    "http://www.raff-clothing.com/wp-content/uploads/2018/02/mens-jackets-nike-apparel-nike-sportswear-archive-track-jacket-green.jpg",
    "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive,fl_lossy/456502181dab49f4bfdda84001652e53_9366/oversize-trefoil-hoodie.jpg"
]
var lastNum = -1;
$(document).ready(function() {
    $("input").click(function()
    {
        //alert("Hi");
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        while(randomChildNumber == lastNum)
        {
            randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        }
        lastNum = randomChildNumber;
        $("H1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src", pic[randomChildNumber]);
        $("img").attr("width", 250);
       
    });
});