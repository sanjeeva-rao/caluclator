angular.module("myapp",[]).controller("mycontroller",function($scope){
    $scope.buttons=[
        [{button:7,value:7},{button:8,value:8},{button:9,value:9},{button:"÷",value:"÷"}],
        [{button:4,value:4},{button:5,value:4},{button:6,value:6},{button:"x",value:"x"}],
        [{button:1,value:1},{button:2,value:2},{button:3,value:3},{button:"-",value:"-"}],
        [{button:0,value:0},{button:".",value:"."},{button:"+",value:"+"},{button:"None"}],
        
    ]
    $scope.res=""
    $scope.goto=function(x,y){
        
            $scope.res+=$scope.buttons[x][y].button       
    }
    $scope.clear=function(){
        $scope.res="";
    }
    $scope.caluclate=function(){
        let i,op1='',op2='',li,sym;
        for(i=0;i<$scope.res.length;i++){
            if(($scope.res[i]=='+') | ($scope.res[i]=='-') | ($scope.res[i]=='x') | ($scope.res[i]=='÷')){
                li=i;
                sym=$scope.res[i];
                break;

                

                
                

            }
            else{
                op1+=$scope.res[i];

            }
        
        }
        for(li=i+1;li<$scope.res.length;li++){
            op2+=$scope.res[li];
        }
        
        
        if(sym=='+'){
            $scope.res=(parseFloat(op1)+parseFloat(op2))
        }
        else if(sym=='-'){
            $scope.res=(parseFloat(op1)-parseFloat(op2))
        }
        else if(sym=='x'){
            $scope.res=(parseFloat(op1)*parseFloat(op2))
        }
        else{
            $scope.res=(parseFloat(op1)/parseFloat(op2))
        }
        
    }
    
    
                        
})