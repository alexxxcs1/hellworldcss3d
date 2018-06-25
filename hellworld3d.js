function Hellworld(data,object){
    if (data&&object&&typeof(object)=='object') {
        self.data = data;
        self.width = object.scrollWidth;
        self.height = object.scrollHeight;
        self.object = object;
    }else
    {
        console.error('初始化参数不正确，第一个参数为三维数组矩阵，第二个参数为要初始化的object');
    }
}
Hellworld.prototype = 
{
    getColor:function(){
        var num1 = parseInt(Math.random()*255+1);
        var num2 = parseInt(Math.random()*255+1);
        var num3 = parseInt(Math.random()*255+1);
        console.log(num1,num2,num3,num1.toString(16)+''+num2.toString(16)+''+num3.toString(16),num1.toString(16).length,num2.toString(16).length,num3.toString(16).length);
        var num1str = num1.toString(16).length==1?'0'+num1.toString(16):num1.toString(16);
        var num2str = num2.toString(16).length==1?'0'+num2.toString(16):num2.toString(16);
        var num3str = num3.toString(16).length==1?'0'+num3.toString(16):num3.toString(16);
        return num1str+''+num2str+''+num3str
    },
    render:function()
    {
        var tmpItem='';
        for (var i = 0; i < self.data.length; i++) {
            
            for (var j = 0; j < self.data[i].length; j++) {
                
                
                for (var x = 0; x < self.data[i][j].length; x++) {
                    
                    for (var z = 0; z <  self.data[i][j][x].length; z++) {
                        
                        var singleWidth = self.width/self.data[i][j].length;
                        var singleHeight = self.height/ self.data[i].length;
                            // 0 底部
                            // 1 顶部
                            // 2 左部
                            // 3 右部
                            // 4 前部
                            // 5 后部
                            // 6 立方体
                        console.log(singleWidth,singleHeight);
                        
                        switch (self.data[i][j][x][z]) {
                            case 0:
                                tmpItem += '<div style="width:'+singleWidth+'px; height:'+singleHeight+'px; position:absolute; transform-style: preserve-3d;  background:#'+this.getColor()+'; transform: translateX('+(singleWidth*x)+'px) translateZ('+(singleHeight*j-(singleHeight + singleHeight/2))+'px) translateY('+((-i*singleHeight+singleHeight/2) + self.height/2)+'px) rotateX(90deg)"></div>' 
                                break;
                            case 1:
                                tmpItem += '<div style="width:'+singleWidth+'px; height:'+singleHeight+'px; position:absolute; transform-style: preserve-3d;  background:#'+this.getColor()+'; transform: translateX('+(singleWidth*x)+'px) translateZ('+(singleHeight*j-(singleHeight + singleHeight/2))+'px) translateY('+((-i*singleHeight-singleHeight/2) + self.height/2)+'px) rotateX(90deg)"></div>'
                                break;
                            case 2:
                                tmpItem += '<div style="width:'+singleHeight+'px; height:'+singleHeight+'px; position:absolute; transform-style: preserve-3d;  background:#'+this.getColor()+'; transform: translateX('+((singleWidth*x)-((singleHeight/2-singleWidth)))+'px) translateZ('+(singleHeight*j-(singleHeight + singleHeight/2))+'px) translateY('+((-i*singleHeight) + self.height/2)+'px) rotateY(90deg)"></div>'
                                break;
                            case 3:
                                tmpItem += '<div style="width:'+singleHeight+'px; height:'+singleHeight+'px; position:absolute; transform-style: preserve-3d;  background:#'+this.getColor()+'; transform: translateX('+((singleWidth*x)-((singleHeight/2-singleWidth)) - singleWidth)+'px) translateZ('+(singleHeight*j-(singleHeight + singleHeight/2))+'px) translateY('+((-i*singleHeight) + self.height/2)+'px) rotateY(90deg)"></div>'
                                break;
                            case 4:
                                tmpItem += '<div style="width:'+singleWidth+'px; height:'+singleHeight+'px; position:absolute; transform-style: preserve-3d;  background:#'+this.getColor()+'; transform: translateX('+(singleWidth*x)+'px) translateZ('+(singleHeight*j-(singleHeight + singleHeight/2) +singleHeight/2)+'px) translateY('+((-i*singleHeight) + self.height/2)+'px)"></div>'
                                break;
                            case 5:
                                tmpItem += '<div style="width:'+singleWidth+'px; height:'+singleHeight+'px; position:absolute; transform-style: preserve-3d;  background:#'+this.getColor()+'; transform: translateX('+(singleWidth*x)+'px) translateZ('+(singleHeight*j-(singleHeight + singleHeight/2) -singleHeight/2)+'px) translateY('+((-i*singleHeight) + self.height/2)+'px)"></div>'
                                break;
                            case 6:
                                tmpItem += '<div style="width:'+singleWidth+'px; height:'+singleHeight+'px; position:absolute; transform-style: preserve-3d;  background:#'+this.getColor()+'; transform: translateX('+(singleWidth*x)+'px) translateZ('+(singleHeight*j-(singleHeight + singleHeight/2))+'px) translateY('+((-i*singleHeight+singleHeight/2) + self.height/2)+'px) rotateX(90deg)"></div>' 
                                        + '<div style="width:'+singleWidth+'px; height:'+singleHeight+'px; position:absolute; transform-style: preserve-3d;  background:#'+this.getColor()+'; transform: translateX('+(singleWidth*x)+'px) translateZ('+(singleHeight*j-(singleHeight + singleHeight/2))+'px) translateY('+((-i*singleHeight-singleHeight/2) + self.height/2)+'px) rotateX(90deg)"></div>'
                                        + '<div style="width:'+singleHeight+'px; height:'+singleHeight+'px; position:absolute; transform-style: preserve-3d;  background:#'+this.getColor()+'; transform: translateX('+((singleWidth*x)-((singleHeight/2-singleWidth)))+'px) translateZ('+(singleHeight*j-(singleHeight + singleHeight/2))+'px) translateY('+((-i*singleHeight) + self.height/2)+'px) rotateY(90deg)"></div>'
                                        + '<div style="width:'+singleHeight+'px; height:'+singleHeight+'px; position:absolute; transform-style: preserve-3d;  background:#'+this.getColor()+'; transform: translateX('+((singleWidth*x)-((singleHeight/2-singleWidth)) - singleWidth)+'px) translateZ('+(singleHeight*j-(singleHeight + singleHeight/2))+'px) translateY('+((-i*singleHeight) + self.height/2)+'px) rotateY(90deg)"></div>'
                                        + '<div style="width:'+singleWidth+'px; height:'+singleHeight+'px; position:absolute; transform-style: preserve-3d;  background:#'+this.getColor()+'; transform: translateX('+(singleWidth*x)+'px) translateZ('+(singleHeight*j-(singleHeight + singleHeight/2) +singleHeight/2)+'px) translateY('+((-i*singleHeight) + self.height/2)+'px)"></div>'
                                        + '<div style="width:'+singleWidth+'px; height:'+singleHeight+'px; position:absolute; transform-style: preserve-3d;  background:#'+this.getColor()+'; transform: translateX('+(singleWidth*x)+'px) translateZ('+(singleHeight*j-(singleHeight + singleHeight/2) -singleHeight/2)+'px) translateY('+((-i*singleHeight) + self.height/2)+'px)"></div>';
                                    break;
                            }
                            
                        
                    }
                    
                    
                }
                
                
            }
            
        }
        self.object.innerHTML = tmpItem;
    }
}