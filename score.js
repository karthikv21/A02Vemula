var App = {
    launch:function(){
        App.calculate()
    },





    calculate: function(){
        var score1 = document.getElementById("score").value;
       
        var matches = document.getElementById("match").value;
       
        var avg1 = Math.round((score1/matches));
        
   document.getElementById("avg").value=avg1;

    },

    compute:function(s,m){

        if(s<=0||m<=0)
        {
            return 0;
        }
        else if(typeof s !=='number'|| typeof m !=='number')
        {
            return 0;
        }
        else 
        {
             var a= s/m;
             var a1=Math.round(a);
             return a1;
        
        }
        
        
        }
        


};