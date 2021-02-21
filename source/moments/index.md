---
title: 友链朋友圈
aside: false
comments: false
translate_title: moments
date: 2021-02-08 03:24:04
---
<div id="friend_link_circle" >
<h2>统计信息</h2>

<div id="info_user_poor" class="article-sort-item" 
style="display:flex;box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 1px 5px 0px; border-radius: 2px;">
<div class="chart">
<span class="friend_post_info_title">当前友链数:</span><span class="friend_post_info_number">&#123;&#123;user_lenth&#125;&#125;个</span><br>
<span class="friend_post_info_title">失败数:</span><span class="friend_post_info_number">&#123;&#123;error&#125;&#125;个</span><br>


</div>
<div class="chart">
<span class="friend_post_info_title">活跃友链数:</span><span class="friend_post_info_number">&#123;&#123;unique_live_link&#125;&#125;个</span><br>
<span class="friend_post_info_title">当前库存:</span><span class="friend_post_info_number">&#123;&#123;listlenth&#125;&#125;篇</span><br>
</div>
<div class="chart">
<span class="friend_post_info_title">今日更新:</span><span class="friend_post_info_number">&#123;&#123;today_post&#125;&#125;篇</span><br>
<span class="friend_post_info_title">最近更新:</span><span class="friend_post_info_number">&#123;&#123;last_update_time&#125;&#125;</span>
</div>
</div>
<div v-for="datalist in datalist_slice">
<h2  v-if="datalist[2]-maxnumber<0" >&#123;&#123;datalist[0]&#125;&#125;</h2>
 <div v-if="item[6]-maxnumber<0" v-for="(item,i) in datalist[1]" class="article-sort-item" style="box-shadow: 0 2px 2px 0 rgba(0,0,0,.07), 0 1px 5px 0 rgba(0,0,0,.1);border-radius: 2px;">
<a  :target="opentype" class="article-sort-item-img" :href="item[2]" :title="item[0]"><img onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-ll-status="loaded" class="entered loaded" :src="item[4]"></a>
<div class="article-sort-item-info"><div class="article-sort-item-time">
 <i class="far fa-user"></i>
<span  style="padding-left:10px;padding-right:10px">&#123;&#123;item[3]&#125;&#125;</span>
<div class="friend_post_time">
<i class="far fa-calendar-alt"></i>
<time class="post-meta-date-created" :datetime="item[1]" :title="item[1]">&#123;&#123;item[1]&#125;&#125;</time>
</div>

</div>
<a   :target="opentype" style="-webkit-line-clamp: 1" class="article-sort-item-title" :href="item[2]" :title="item[0]">&#123;&#123;item[0]&#125;&#125;</a>
</div>
</div>
</div>
<div style="text-align: center">
<button v-if="loadmore_display" type="button" class="load_button" @click="addmaxnumber()">加载更多...</button>
</div>

</div>

<style>
.friend_post_info_title{
font-weight: 700;
}
.friend_post_info_number{
float:right
}


.chart{
align-items: flex-start;
flex:1;
width:100px;
height:60px;
margin:20px;

}

@media screen and (max-width: 500px) {

#info_user_poor{
padding:10px ;
flex-direction:column;
max-height:200px
}
.chart{
flex:0;
width:100%;
height:160px;
margin:0;

}

}
.article-sort-item:before {border: none}
@media screen and (min-width: 500px) {
.friend_post_time{
float: right
}
}
.load_button {
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-align: center;
    border: 1px solid #ededed;
    border-radius: .3em;
    display: inline-block;
    background: transparent;
    color: #555;
    padding:.5em 1.25em;
}

.load_button:hover {
   color: #3090e4;
    border-color: #3090e4
}
</style>
<script data-pjax js-pjax src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>
<script data-pjax js-pjax src="https://cdn.jsdelivr.net/gh/ccknbc-actions/blogroll/moments.js"></script>