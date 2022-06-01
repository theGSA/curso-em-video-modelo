function SetHeaderAndFooter(){
    var xhr= new XMLHttpRequest();
    xhr.open('GET', 'index.html', true);
    xhr.onreadystatechange= function() {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return; // or whatever error handling you want
        //document.querySelector("header").innerHTML= xhr.responseXML.querySelector("header");
       // console.log(document.querySelector('header')); 
        var doc = new DOMParser().parseFromString(xhr.responseText, "text/html");  
        console.log(doc.querySelector('header'));
        document.querySelector("header").innerHTML = doc.querySelector('header').innerHTML;
        document.querySelector("footer").innerHTML = doc.querySelector('footer').innerHTML;
    };
    xhr.send();
}