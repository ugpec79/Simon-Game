var but=["r","g","b","y"];

      
        
        var check=new Array();
       
        
function func(){
    
        var b=Math.floor(Math.random()*4);
        check.push(but[b]);
        $("."+but[b]).addClass("pressed");
       
        setTimeout(
            function(){
                $("."+but[b]).removeClass("pressed");
            },1000
        )
        }
        var i=0;
        $("button").click(function(){
            
           
            
            if(this.className!=check[i]){
                check.length=0;
                
                i=0;
                console.log("loser");
                setTimeout(
                func(),1000
                );
            }
            else{
                console.log(i,check[i]);
               i++;
               if(i>=check.length){
                i=0;
                func();
               }
            }
            
        })
        
      
    
   
  
  
// add event listener 
$(document).keydown(function(event){
    if(event.key=='a'){
            func();
    }
})
    
        
        
        
        

        

    
