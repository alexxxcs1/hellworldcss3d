# hellworldcss3d

第一次写自己的插件，主要功能是用css 3d的属性生成伪3d的模型。

之前从没接触过css 3d ，css做动画就是我的弱项，一直以为要玩3d就得用webGL之类的,直到后来看到淘宝造物节，被经验到了，花了2天时间去研究怎么写。

后来做完后我就想，为什么不写一个插件来生成简单的3d模型，就像Minecraft一样的世界。

然后就有了这个项目

代码还没优化，看起来软七八糟的，预计以后还会更新，如果你有兴趣也可以fork改一改

##用法

引入 hellworld3d.js 

定义一个三维数组



    var data=[
        [
            [
                [6],[6],[6],[6],[6],[6],
            ],
            [
                [6],[6],[6],[6],[6],[6],
            ],
            [
                [6],[6],[6],[6],[6],[6],
            ],
            [
                [0],[0],[0],[0],[0],[0],
            ],
            [
                [0],[0],[0],[0],[0],[0],
            ],
            [
                [0],[0],[0],[0],[0],[0],
            ],
        ],
        [
            [
                [6],[6],[6],[6],[6],[6],
            ],
            [
                [6],[6],[6],[6],[6],[6],
            ],
            [
                [null],[null],[6],[null],[null],[null],
            ],
            [
                [null],[null],[null],[null],[null],[null],
            ],
            [
                [null],[null],[null],[null],[null],[null],
            ],
            [
                [null],[null],[null],[null],[null],[null],
            ],
        ],
        [
            [
                [null],[null],[null],[null],[null],[null],
            ],
            [
                [null],[null],[null],[null],[6],[null],
            ],
            [
                [null],[null],[6],[null],[null],[null],
            ],
            [
                [null],[null],[null],[6],[null],[null],
            ],
            [
                [null],[null],[null],[null],[null],[null],
            ],
            [
                [null],[null],[null],[null],[null],[null],
            ],
        ],
        [
            [
                [6],[6],[6],[6],[6],[6],
            ],
            [
                [null],[6],[null],[null],[6],[null],
            ],
            [
                [null],[6],[6],[null],[null],[null],
            ],
            [
                [null],[6],[6],[6],[null],[null],
            ],
            [
                [null],[null],[null],[null],[null],[null],
            ],
            [
                [null],[null],[null],[null],[null],[null],
            ],
        ]
    ];
    
数字分别对应：

// 0 底部// 1 顶部// 2 左部// 3 右部// 4 前部// 5 后部// 6 立方体 //null 空

假设data[i][j][x]:

data.length = 三维世界的层级 

data[i].length  = 二维平面的长度

data[i][j].length = 二维平面的宽度

data[i][j][x] = 方块类型 // 0 底部// 1 顶部// 2 左部// 3 右部// 4 前部// 5 后部// 6 立方体 //null 空

初始化模型世界

``
var hw = new Hellworld(data,document.getElementById('View'));
``

渲染模型世界

``
hw.render();
``

##示例

http://packy.club/hellworldcss3d/

##TODOLIST

!增加平面材质渲染功能
