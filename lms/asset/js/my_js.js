
bar = document.getElementById("bar")
bar.addEventListener('click',(e)=>{
            e.preventDefault()
            header = document.getElementById("header")
            if(header.style.height === "600px"){
                header.style.height = "100px"
               

            }
            else{
                header.style.height = "600px"
                

            }
        })
bar2 = document.getElementById("bar2")
bar2.addEventListener('click',(e)=>{
            e.preventDefault()
            left_article_section = document.getElementById('left_article_section')
            if(left_article_section.classList.contains("show")){
                left_article_section.classList.remove("show")
                left_article_section.classList.add("hide")
            }
            else{
                left_article_section.classList.remove("hide")
                left_article_section.classList.add("show")                
            }


        })
   
