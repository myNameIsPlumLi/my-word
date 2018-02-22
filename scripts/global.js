var M = {
    navAry: [
        {title: "today", text: "今日一刻", icon: "icon-home"},
        {title: "older", text: "往期内容", icon: "icon-file-empty"},
        {title: "author", text: "热门作者", icon: "icon-pencil"},
        {title: "category", text: "栏目浏览", icon: "icon-menu"},
        {title: "favourite", text: "我的喜欢", icon: "icon-heart"},
        {title: "setting", text: "设置", icon: "icon-cog"}
    ],
    styleAry: function () {
        var ary = [
            {selector: "part1",css: "background-color: #46c8ce;"},
            {selector: "part2",css: "background-color: #62c98d;"},
            {selector: "part3",css: "background-color: #eb9d58;"},
            {selector: "part4",css: "background-color: #5293d0;"},
            {selector: "part5",css: "background-color: #ff7777;"},
            {selector: "part6",css: "background-color: #fdcc65;"}
        ];
        ary.base = ".wrapper .navbar .nav .list i";
        return ary;
    }()



};