document.getElementById("submit-btn").addEventListener("click",function(){

    let name=document.getElementById("string-inut").value
        console.log(name)

        let toUpper=name.toUpperCase()
        console.log(name,"\n",toUpper)
        let replaceo=toUpper.replace("O","Y")
        console.log(replaceo)
        // عكس الكلام 
         let reverseST=replaceo.split("").reverse().join("")
         console.log(reverseST)
        //  split("") تحويل النص الى مصفوفة 
        // reverse() عكس عناصر المصفوفة 
        // join("") تحويل من مصفوفة الى نص 
        document.getElementById("reult").innerHTML=`${toUpper}<br>${replaceo}<br>${reverseST}`
})

  