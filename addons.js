function getShortURL(){
    var url = document.getElementById("longurl").value;  
    var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/; 
    if (!re.test(url)) {      
    alert("error");
    return false;
    }

    var len = url.length;
    var str = '';
    var n = 8;
    var t = 5000;
         while (num > 0) {  
            str = url.charAt(t*n % len) + str;
            n--;
        }

    var shorturl = str;
    document.getElementById("result").innerHTML="Shorten URL is : "+ "www.tinyurl.com/" + shorturl;


}
