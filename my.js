var inp = document.getElementById("get-files");
var main = document.getElementById("main");
var browser= document.getElementById("browser");
// Access and handle the files 

function godear(){

    for (i = 0; i < inp.files.length; i++) {
        let file = inp.files[i];
        console.log(`https://cdnsit.wovvtech.com/image/${browser.value}/${file.name}`);
        let img=document.createElement("IMG")
        // browser.replaceChild(" ","%20")
        img.src=`https://cdnsit.wovvtech.com/image/${browser.value}/${file.name}`
        img.title="click and copy"
        img.onclick=(e)=>{
            navigator.clipboard.writeText(`https://cdnsit.wovvtech.com/image/${browser.value}/${file.name}`);
            // console.log(e);
            document.querySelector("p").style.display="inline"
            document.querySelector("p").style.width="80px"
            document.querySelector("p").style.left=e.clientX+"px"
            document.querySelector("p").style.top=e.clientY+"px"
            setTimeout(()=>{
                document.querySelector("p").style.display="none"
                
            },3000)
        }
        img.onmouseout=()=>{
            var tooltip = document.getElementById("myTooltip");
            tooltip.innerHTML = "Copy to clipboard";
        }
        main.appendChild(img)
        // do things with file
    }
}
