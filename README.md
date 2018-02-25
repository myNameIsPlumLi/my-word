### { ==标题==
最多只能到6级标题,没有7级标题,内容与符号须有空格)
# 一级标题(即h1);
## 二级标题(即h2);
### 三级标题(即h3);
#### 四级标题(即h4);
##### 五级标题(即h5);
###### 六级标题 (即h6);
### }

### { ==空白折叠==
你  &nbsp;&nbsp;&nbsp;&nbsp;   好 (注意会发生空白折叠现象,解决办法: &nbsp;)
### }

### { ==换行==
窗前明月光
疑是地上霜 (不会认为是换行)

举头望明月

低头思故乡 (也就是说两行文字中间有空行,才会换行处理)
### }

### { ==文本处理==
内容与符号不能有空格

**hello world** 加粗处理;

++hello world++

*hello world* 倾斜处理;

~~hello world~~ 删除线处理;

==文本背景== 文本黄色背景;

`文本背景1` 文本浅色背景;

	娃哈哈
		么么哒
			嘻嘻哒

`文本背景2` 文本浅色背景;
	娃哈哈
		么么哒
		    嘻嘻哒

\`hello world` 利用 \ 符号可以照文本默认输出,防止编译;

### }

### { ==代码块==
```
    ^_^
```
```html
    <input type="text"><input>
    <div class="box"><div>
```
```css
    body{
        background-color: red;
    }
```
```js
    var a = 123;
    console.log(123);
```
    abc
    def
    
公式 ↓
```math
1 + 1 = 2^2
```
```math
\frac {1+(2+3)} {2}
```
```math
2 \times2 = 4
```
### }

### { ==分割线==
以三种方式都表示分割线
***
___
---
### }
### { ==引用==
内容与符号可以有空格也可以没有空格,另起梯栏需要空行
>你好
>>我不好
>>>好心塞

>啊
>>啊啊
>>>啊啊啊
### }
### { ==列表==
内容和符号之间须有空格;
- 苹果
- 香蕉
- 葡萄
+ 小狗
+ 小猪
+ 小猫
1. 都比
    1. 哈哈
    2. 嘻嘻
    3. 吱吱
2. 蠢比
3. 二笔
    - 战斗机
    - 灰机
    - 吹风机
### }

### { ==超级链接==
脚注生效的前提是中间有空行


[百度](https://www.baidu.com "百度搜索")


![](https://www.baidu.com/img/baidu_jgylogo3.gif "百度图片")

![][4]


我们说的BAT指的是: [百度][1] [阿里巴巴][2] [腾讯][3] ;

[1]:https://www.baidu.com "百度"
[2]:https://www.baidu.com "阿里巴巴"
[3]:https://www.baidu.com "腾讯"
[4]:https://www.baidu.com/img/baidu_jgylogo3.gif "百度图片" 
### }


### { ==选择== 
x表示默认选中
- [ ] 水浒传
- [ ] 三国演义
- [x] 西游记
- [ ] 红楼梦
### }

### { ==表格==
通过冒号来控制对齐方式:
:---     左对齐 <br>
:---:    居中对齐 <br>
---:     右对齐 <br>
姓名 | 性别 | 爱好
:---:  | :---:  | :---:
李   |  男男男男男男  | 游戏
任   |  女  | 读书
江   |  男  | 吹牛吹牛吹牛吹牛
郑郑郑郑郑   |  女  | 吃货
### }

### { ==甘特图==
~~~
gantt
dateFormat YYYY-MM-DD
title web项目时间表

section 客户
明确需求: 2018-01-01,3d
上线测试: 2018-01-13,3d

section 产品部
设计产品原型: 2018-01-04,3d

section 设计部
web设计: 2018-01-07,3d

section 研发部
beta 上线: 2018-01-10,3d
~~~
### }

### { ==流程图==
以下指的是流程图的朝向 <br>
graph TB  (即top => bottom) <br>
graph BT  (即bottom => top) <br>
graph RL  (即right => left) <br>
graph LR  (即left => right) <br>
注意: {} 和 []的作用差不多,区别在于[]的显示形状是矩形,而{}的显示形状是菱形; .-> 和 -->的区别在意前者是 点线 而后者是 实线;
```
graph TB
a[填写用户名] --> b{判断用户名是否存在}
b --> | 不存在 | c[用户名错误]
c --> | 请重新输入 | a
b --> | 存在 | d{请输入密码}
d .-> | 正确 | e[登录成功]
d .-> | 错误 | d
```


### }

## 推荐使用vsCode。vsCode可以安装Auto-Open Markdown Preview插件,其作用是当你打开 .md 文件时,自动开启预览,方便你在编辑的过程中实时地看到结果;
### 推荐学习地址: https://github.com/xirong/my-markdown
