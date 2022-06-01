function SetHeaderAndFooter(){
    var xhr= new XMLHttpRequest();
    xhr.open('GET', 'index.html', true);
    xhr.onreadystatechange= function() {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return; // or whatever error handling you want
        //document.querySelector("header").innerHTML= xhr.responseXML.querySelector("header");
       // console.log(document.querySelector('header')); 
        var doc = new DOMParser().parseFromString(xhr.responseText, "text/html");  

        document.querySelector("header").innerHTML = doc.querySelector('header').innerHTML;
        document.querySelector("footer").innerHTML = doc.querySelector('footer').innerHTML;
    };
    xhr.send();
}


function CalcPrice()
{
    var price = 1200.00;
    var qtd = document.getElementById('quantidade').value;

    document.getElementById("p-total").value = (qtd * price).toFixed(2);
    
}