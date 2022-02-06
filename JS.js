window.onload = function () {

    // .....................................NEW TODO.............................................//
    
    function addAnother() {
        let inputNEWtodo = document.getElementById('inputNEWtodo')
        let ulLIST = document.getElementById('ulLIST')
        let li = document.createElement('li')
        
        let divcheckBOX = document.createElement('div')
        divcheckBOX.classList.add('checkBOX')
        let divcheck = document.createElement('div')
        divcheck.classList.add('check')
        divcheck.id = 'checkTODOli'
        let imgcheck = document.createElement('img')
        imgcheck.id = 'imgdone'
        imgcheck.src = './images/icon-check.svg'
        imgcheck.classList.add('imgdone')
        divcheck.appendChild(imgcheck)
        divcheckBOX.appendChild(divcheck)
        li.appendChild(divcheckBOX)
        

        if(inputNEWtodo.value==""){
            alert('Input can not be empty')
        }
        
        if(!inputNEWtodo.value==""){
                    
            let p = document.createElement('p')
            p.innerText = inputNEWtodo.value
            p.id= 'PLI'
            li.appendChild(p)
            

            p.addEventListener('click',CHECK)
            divcheck.addEventListener('click',CHECK)
    
            function CHECK (){
                    divcheck.classList.toggle('done');
                    imgcheck.classList.toggle('imgdone')
                    p.classList.toggle('checkedP');
                    li.classList.toggle('checked');
            }

            let closeBOX = document.createElement('div')
            closeBOX.classList.add('closeBOX')
            let closeBTN = document.createElement('div')
            closeBTN.id='closeBTN'
            let imgclose = document.createElement('img')
            imgclose.classList.add('imgclose')
            imgclose.id='closeimg'
            imgclose.src="./images/icon-cross.svg"

            closeBTN.appendChild(imgclose)
            closeBOX.appendChild(closeBTN)
            li.appendChild(closeBOX)
            
            ulLIST.appendChild(li)

        }

    
        inputNEWtodo.value=""

        program()
    }

//  ............................RUN program...............................//



        let creatNEWtodo = document.getElementById('EnterTEXT')
        creatNEWtodo.addEventListener('click',addAnother)

        program()

        function program(){

//  .........................FOR inputBOX checkBOX BTN...........................//

    
        let EnterTEXT = document.getElementById('EnterTEXT')
        let imgEnter = document.getElementById('imgEnter')
    
        EnterTEXT.addEventListener('mousemove',function(){
        imgEnter.style.display= 'block'
        EnterTEXT.style.background= 'linear-gradient(hsl(192, 100%, 67%),hsl(280, 87%, 65%) )'
        })
    
        EnterTEXT.addEventListener('mouseleave',function(){
            imgEnter.style.display= 'none'
            EnterTEXT.style.background= 'transparent'
    
        })
    
    //...............................LI When they are hovering AND mousemoved........................//
    
    let allLI = document.getElementsByTagName("li");
    let checkTODOli = document.querySelectorAll('#checkTODOli')
    let closeBTN = document.querySelectorAll('#closeBTN')
    
    for (let i = 0; i < allLI.length; i++) {
        allLI[i].addEventListener('mouseenter',function(){
            checkTODOli[i].classList.add("checkli")
            closeBTN[i].style.display= "block"
        })
      }
      
    for (let i = 0; i < allLI.length; i++) {
        allLI[i].addEventListener('mouseleave',function(){
            checkTODOli[i].classList.remove("checkli")
            closeBTN[i].style.display= "none"
        })
      }

    
    // ................................BTN Clear Completed................................//
    
    let clear = document.getElementById('clear')
    clear.addEventListener('click',ClearCompleted)
    
    function ClearCompleted(){
        
        for (let i = 0; i < ALLli.length; i++) {
        if((ALLli[i].classList.contains('checked'))){
            ALLli[i].remove()
            }
        } 
        
    }

    
    //.................................. BTN Completed..................................//
    
    let Completed = document.getElementById('Completed')
    
    
    let ALLli = document.querySelectorAll("li")
    
    Completed.addEventListener('click',CompletedF)
    
    function CompletedF(){
        
        for (let i = 0; i < ALLli.length; i++) {
        if(!(ALLli[i].classList.contains('checked'))){
            ALLli[i].style.display = "none";
            }
            else{
                ALLli[i].style.display = "flex";
            }
        }   
    }
    
    Completed.addEventListener('click',function(){
        btnall.classList.remove('active')
        Active.classList.remove('active')
        Completed.classList.add('active')
    })
    
    
    //......................... BTN Active.............................//
    
    let Active = document.getElementById('Active')
    
    Active.addEventListener('click',ActiveF)
    function ActiveF (){
        for (let i = 0; i < ALLli.length; i++) {
            if(!(ALLli[i].classList.contains('checked'))){
                ALLli[i].style.display="flex"
            }
            else{
                ALLli[i].style.display= "none" 
                }      
        }
    }
    
    Active.addEventListener('click',function(){
        btnall.classList.remove('active')
        Active.classList.add('active')
        Completed.classList.remove('active')
    })
    
    
    //.............................. BTN ALL...............................//
    
    let btnall = document.getElementById("ALL")
    
    btnall.addEventListener('click',ALL)
    
    function ALL(){
        for (let i = 0; i < ALLli.length; i++) {
            ALLli[i].style.display = "flex";
      
            }
        }
        btnall.addEventListener('click',function(){
            btnall.classList.add('active')
            Active.classList.remove('active')
            Completed.classList.remove('active')
        })
    
    
    
    //..................................mobile BTN Completed...............................//
    
    let CompletedMB = document.getElementById('CompletedMB')
    CompletedMB.addEventListener('click',CompletedFMB)
    function CompletedFMB(){
        
        for (let i = 0; i < ALLli.length; i++) {
        if(!(ALLli[i].classList.contains('checked'))){
            ALLli[i].style.display = "none";
            }
            else{
                ALLli[i].style.display = "flex";
            }
            btnALLMB.classList.remove('active')
            ActiveMB.classList.remove('active')
            CompletedMB.classList.add('active')
        } 
        
    }
    
    //.........................mobile BTN Active..................//
    
    
    let ActiveMB = document.getElementById('ActiveMB')
    
    ActiveMB.addEventListener('click',ActiveF)
    function ActiveF (){
        for (let i = 0; i < ALLli.length; i++) {
            if(!(ALLli[i].classList.contains('checked'))){
                ALLli[i].style.display="flex"
            }
            else{
                ALLli[i].style.display= "none" 
                }
                btnALLMB.classList.remove('active')
                ActiveMB.classList.add('active')
                CompletedMB.classList.remove('active')
        }
    
    }
    
    //..............................mobile BTN ALL......................//
    
    let btnALLMB = document.getElementById("ALLMB")
    
    btnALLMB.addEventListener('click',ALL)
    
    function ALL(){
        for (let i = 0; i < ALLli.length; i++) {
            ALLli[i].style.display = "flex";
            btnALLMB.classList.add('active')
            ActiveMB.classList.remove('active')
            CompletedMB.classList.remove('active')
            }
        }
    
    
    //..............................closeBTN.............................//
    
    let closeimg = document.querySelectorAll('#closeimg')
    
        for(let i=0; i < closeimg.length; i++){
            closeimg[i].addEventListener('click',
            function closeLI () {
                ALLli[i].remove()
            })
        }
                  
  
    // ....................................Drag and drop..............................................//
    
    for(let i=0;i<ALLli.length;i++){
        ALLli[i].classList.add("dropzone");
        ALLli[i].id=i
        ALLli[i].draggable="true"
    }
    
    let dragged;
    let id;
    let index;
    let indexDrop;
    let list;
    
      document.addEventListener("dragstart", ({target}) => {
          dragged = target;
          id = target.id;
          list = target.parentNode.children;
          for(let i = 0; i < list.length; i += 1) {
            if(list[i] === dragged){
              index = i;
            }
          }
      });
    
      document.addEventListener("dragover", (event) => {
          event.preventDefault();
      });
    
      document.addEventListener("drop", ({target}) => {
       if(target.className == "dropzone" && target.id !== id) {
           dragged.remove( dragged );
          for(let i = 0; i < list.length; i += 1) {
            if(list[i] === target){
              indexDrop = i;
            }
          }
          console.log(index, indexDrop);
          if(index > indexDrop) {
            target.before( dragged );
          } else {
           target.after( dragged );
          }
        }
      });
    
//.................................THEME DARK AND LIGHT.........................................//

        let iconmoon = document.getElementById('iconmoon')
        let iconsun = document.getElementById('iconsun')
        
        let BODY = document.getElementById('BODY')
        let inputBOX = document.getElementById('inputBOX')
        let listTODO = document.getElementById('listTODO')
        let inputNEWtodo = document.getElementById('inputNEWtodo')

        // let allLI = document.getElementsByTagName("li");
        // let checkTODOli = document.querySelectorAll('#checkTODOli')
        // let closeBTN = document.querySelectorAll('#closeBTN')

    
        function THEMElight(){
            BODY.classList.add('lightBODY')
            inputBOX.classList.add('inputBOXlight')
            listTODO.classList.add('listTODOlight')
            iconsun.style.display= 'none'
            iconmoon.style.display= 'block'
            inputNEWtodo.classList.add('input-todolight')
            NOtodos.classList.add('plight')
            NOtodos.classList.remove('pstyle')
        }

        function THEMEdark(){
            BODY.classList.remove('lightBODY')
            inputBOX.classList.remove('inputBOXlight')
            listTODO.classList.remove('listTODOlight')
            iconsun.style.display= 'block'
            iconmoon.style.display= 'none'
            inputNEWtodo.classList.remove('input-todolight')
            NOtodos.classList.remove('plight')
            NOtodos.classList.add('pstyle')
        }

        iconsun.addEventListener('click',THEMElight)
        iconmoon.addEventListener('click',THEMEdark)


    }
     
    // .................................items left dynamic NUM................................//
    
    setInterval(dynamic,0);

        function dynamic(){
        let itemsLeft = document.getElementById("items-left")
        let ALLlilength = document.querySelectorAll("li").length
        let checkedlilength = document.querySelectorAll('.checked').length
        let NOtodos = document.getElementById('NOtodos')

        let ACTIVELeft = ALLlilength - checkedlilength  
        itemsLeft.innerText = ACTIVELeft
        
            if(ALLlilength==0){
                NOtodos.style.display='block'
            }
            else{
                NOtodos.style.display='none'
            }
        }
            
    // ...................................checkBOX check hoverlight...................................//

  

    iconsun.addEventListener('click',hoverlight)
    
    function hoverlight(){
        let allLI = document.getElementsByTagName("li");
        let checkTODOli = document.querySelectorAll('#checkTODOli')
        let closeBTN = document.querySelectorAll('#closeBTN')
        let EnterTEXT = document.getElementById('EnterTEXT')
        
            for (let i = 0; i < allLI.length; i++) {
                allLI[i].addEventListener('mousemove',function(){
                    checkTODOli[i].classList.add("checklilight")
                    closeBTN[i].style.display= "block"
                })
            }
            
            for (let i = 0; i < allLI.length; i++) {
                allLI[i].addEventListener('mouseleave',function(){
                    checkTODOli[i].classList.remove("checklilight")
                    closeBTN[i].style.display= "none"

                })
            }
            EnterTEXT.addEventListener('click',hoverlight)

        }


    // ...................................checkBOX check hoverdark....................................//

    iconmoon.addEventListener('click',hoverdark)

    function hoverdark(){

        let EnterTEXT = document.getElementById('EnterTEXT')
            let allLI = document.getElementsByTagName("li");

            for (let i = 0; i < allLI.length; i++) {
                allLI[i].addEventListener('mousemove',function(){
                    checkTODOli[i].classList.remove("checklilight")
                    checkTODOli[i].classList.add("checkli")
                    closeBTN[i].style.display= "block"
                })
            }
            
            for (let i = 0; i < allLI.length; i++) {
                allLI[i].addEventListener('mouseleave',function(){
                    checkTODOli[i].classList.remove("checklilight")
                    checkTODOli[i].classList.remove("checkli")
                    closeBTN[i].style.display= "none"
                })
            }
            
            EnterTEXT.addEventListener('click',hoverdark)

        }
        
//................................click Enter to add TODOS...................................//    

    let input = document.getElementById("inputNEWtodo");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("EnterTEXT").click();
        }
    });


                 
}

