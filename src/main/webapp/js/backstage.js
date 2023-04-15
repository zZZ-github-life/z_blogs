/*
    @author:  zZZ....
    @description:  公共的后台js
    @date: 2022/6/19
*/

/*===================================================================common  start=============================================================*/
$.ajaxSetup({

    complete: function(jqXHR, textStatus){

        switch (jqXHR.status){

            case(302):
                window.location.reload();
                break;
        }

    }
});
//增加替换所有方法
String.prototype.replaceAll  = function(s1,s2){
    return this.replace(new RegExp(s1,"g"),s2);
};
//自定义  解析form表单数据为json
jQuery.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    jQuery.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [ o[this.name] ];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
}
//回到顶部
function toTop() {
    $('body,html').animate({scrollTop: 0}, 0);
}
function getUrlParam(name){
    let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if (r!=null) {return unescape(r[2]);}
    return null;
}
/**
 * 警告框
 * @param lev 提醒等级 success, info ,warning ,danger
 * @param title 标题
 * @param content 内容
 */
function blogAlter(title,content,lev) {
    let elementById = document.getElementById('blog_alter');
    elementById.className='';
    elementById.classList.add('alert');
    elementById.classList.add('blog-alter');
    elementById.classList.add('alert-success');
    if (lev){
        elementById.classList.add('alert-'+lev);
    }
    if (title){
        elementById.querySelector('.alert-title').innerText= title;
    }
    if (content){
        elementById.querySelector('.text-muted').innerText= content;
    }
    elementById.classList.add('blog-prompt');
    setTimeout(function () {
        elementById.classList.remove('blog-prompt');
    },3000);
}
/**
 * 将字符串转化为dom，并替换变量
 * @param str 要转换的字符串
 * @param length 变量个数
 * @param arr 存储key，val对象的数组
 * @returns {string|Element}
 */
function strToEleByParam(str,length,arr){
    let s = str; //不改变原来字符串
    if (arr.length && length==arr.length){
        for (let i = 0; i < arr.length; i++) {
           s= s.replaceAll('@'+arr[i].key+'@',arr[i].value);
        }
        let tempEle = document.createElement('div');
        tempEle.innerHTML = s;
        return tempEle.firstElementChild;
    }else {
        return '';
    }
}

/**
 * 将字符串转化为dom，并替换变量
 * @param str 要转换的字符串
 * @param obj 存储key，val对象的对象
 * @returns {string|Element}
 */
function strToEleByObj(str,obj){
    let s = str; //不改变原来字符串
    if (obj && obj instanceof Object){

        for (let objKey in obj) {
            s= s.replaceAll('@'+objKey+'@',obj[objKey]);
        }
        let tempEle = document.createElement('div');
        tempEle.innerHTML = s;
        return tempEle.firstElementChild;
    }else {
        return '';
    }
}


//滚动加载图片
function zScroll(e) {
    // 变量 scrollHeight 是滚动条的总高度
    let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

    // 变量 windowHeight 是可视区的高度
    let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;

    // 变量scrollTop为当前页面的滚动条纵坐标位置
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    // 滚动条到底部得距离 = 滚动条的总高度 - 可视区的高度 - 当前页面的滚动条纵坐标位置
    let scrollBottom = scrollHeight - windowHeight - scrollTop;


    if (Math.floor(Math.abs(scrollBottom)) === 0){
        if (  window.zScrollObj.gallery){
            imgList(++pageDataGallery.currentPage,6);
        }
        if (  window.zScrollObj.guestBook ){
            guestDateList(++pageDataGuestBook.currentPage,6);
        }
        if (  window.zScrollObj.blogList){
            blogGetList(++pageDataBlogs.start,6);
        }
    }
    




}


/*===================================================================common  start=============================================================*/


/*===================================================================home  start=============================================================*/
let HomeMap ;
function homeResize(){
    HomeMap.updateSize();
}

/*===================================================================home  end=============================================================*/




/*===================================================================classify  start=============================================================*/

// $('#modal-danger').on('hidden.bs.modal', function (e) {
//
// });

let dataY =[],dataX=[];
let chart;
//图表
let options = {
    colors:['#FFFFFF'],
    series: [{
        name: '文章数量',
        data: dataY

    }],
    chart: {
        height: 320,
        type: 'bar',
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        }
    },
    plotOptions: {
        bar: {
            borderRadius: 15,
            columnWidth: '30%',
        }
    },
    dataLabels: {
        enabled: false,  //是否在柱状图上展示数据

    },
    stroke: {
        width: 0 //柱状图边框
    },

    grid: {
        row: {
            colors: ['#fff', '#f2f2f2']
        }
    },
    xaxis: {
        labels: {
            rotate: -45,
            color:'#FFF'
        },
        categories: dataX,
        tickPlacement: 'on' ,//功能菜单

    },
    yaxis: {
        title: {
            text: '分类统计',
            style: {
                color: 'white',
                fontSize: '15px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
            }
        },
    },
    fill: {
        colors:["#fff"],
        type: 'gradient', // 梯度
        gradient: {
            type: 'horizontal', // 水平方向的梯度
            gradientToColors: ['#00C3DF'], // 渐变结束的颜色
            opacityFrom: 1, // 透明度
            opacityTo: 1,
            stops:[0,120]
        }
    },
    labels:{
        style:{
            color:'#FFF'
        }
    },
    group:{
        style:{
            color:'#FFF'
        }
    }
};

//加载图表
function blog_fn_loadCharts() {
    $.get({
        url:'/classifyController/getNumAndName',
        success:function (res) {
            if (res.success){
                dataY.length =0 ;dataX.length =0;
                for (let i = 0; i < res.data.length; i++) {
                    dataY.push(res.data[i].classifyNum);
                    dataX.push(res.data[i].classifyName);
                }

                chart = new ApexCharts(document.querySelector("#blog_classify_id_chart"), options);
                chart.render();
            }
        }
    });

}

//分页控件
function blog_classify_page(currentPage) {
    let pageSize = document.getElementById('blog_classify_show_pageSize').value;
    getList(currentPage,pageSize);

}

let pageDataClassify ; //记录分页值
/**
 *  分页获取数据
 * @param currentPage 当前页
 * @param pageSize 每页大小
 * @param queryPerm 查询参数，对象类型
 */
function getList(currentPage,pageSize,queryPerm){
    if (currentPage === undefined || currentPage <=0 ){
        currentPage =1;
    }
    if(pageSize === undefined || pageSize <=0){
        pageSize =10;
    }
    pageDataClassify ={currentPage:currentPage,pageSize:pageSize,p:queryPerm};
    //查询分类数据
    jQuery.ajax({
        type:'post',
        url:'/classifyController/list',
        data:pageDataClassify,
        success:function (data) {
            if (data.success && data.data.list.length != 0){
                f(data.data);
            }else {
                $('#blogs_tbody').html('<tr><td colspan="6" style="text-align: center;color: rgba(155,156,157,0.59)">暂无数据！</td></tr>');
            }
        }
    });
}



//封装table
function f(data) {
    let tableData = data.list;
    //填充表格数据
    let tbody ='';
    for ( let i = 0; i < tableData.length; i++) {//循环json对象，拼接tr,td的html
        tbody = tbody + '<tr>';
        tbody = tbody + '<td  data-blog-id = '+tableData[i].id+' ><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>';
        tbody = tbody + '<td>' + tableData[i].classifyName + '</td>';
        tbody = tbody + '<td>' + tableData[i].classifyKey + '</td>';
        tbody = tbody + '<td>' + tableData[i].classifyNum + '</td>';
        tbody = tbody + '<td><span class="blog-color" data-blog-color = '+tableData[i].color+' style="background-color: '+tableData[i].color+'"></span></td>';
        tbody = tbody + '<td>' + tableData[i].sort + '</td>';
        tbody = tbody + '<td><div class="btn-list flex-nowrap"><a  onclick="blog_classify_edit(this)"  class="btn btn-light btn-pill ">Edit</a><a  data-bs-toggle="modal" data-bs-target="#modal-danger" onclick="blog_classify_del('+tableData[i].id+')" class="btn btn-light  btn-pill">del</a></div> </td>';
        tbody = tbody + '</tr>';
    }
    $('#blogs_tbody').html(tbody);

    //分页栏
    let dataFooter = $('#blog_classify_data_footer');
    dataFooter.html('');
    dataFooter.append('<p class="m-0 text-muted">A Total  of <span>'+data.total+'</span> entries</p>');
    let footer ='<ul class="pagination m-0 ms-auto" >\n' +
        '                                    <li class="page-item '+(data.firstPage?'disabled':'')+'" '+(data.firstPage?'':'onclick="blog_classify_page(--pageDataClassify.currentPage)"')+'  >\n' +
        '                                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">\n' +
        '                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="15 6 9 12 15 18"></polyline></svg>\n' +
        '                                            prev' +
        '                                        </a>' +
        '                                    </li>';
    for (let j =1; j <= data.totalPage;j++){
        footer+=' <li class="page-item '+(data.currentPage == j ? 'active' : '')+' " onclick=blog_classify_page('+j+')><a class="page-link" href="#">'+j+'</a></li>';
    }
    footer+= '' +
        '                                    <li class="page-item '+(data.lastPage ?'disabled':'')+'" '+(data.lastPage?'':'onclick="blog_classify_page(++pageDataClassify.currentPage)"')+'  >\n' +
        '                                        <a class="page-link" href="#">\n' +
        '                                            next\n' +
        '                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="9 6 15 12 9 18"></polyline></svg>\n' +
        '                                        </a>\n' +
        '                                    </li>\n' +
        '                                </ul>';

    dataFooter.append(footer);
}




//修改或者添加分类数据
function blog_classify_submit() {
    jQuery.ajax({
        type:'post',
        url:'/classifyController/save',
        data:$('#blog_classify_form').serializeObject(),
        success:function (data) {

            $('#blog_classify_form')[0].reset();
            getList(1,10);
            blog_fn_loadCharts();
            document.getElementById('blog_classify_edit').innerHTML = '<span>添加分类</span>';
            document.getElementById('classifyDataId').value =null;
        },
        error:function (data) {

        }
    });


}

//edit 按钮
function blog_classify_edit(ele){
    let children = ele.parentNode.parentNode.parentNode.children;
    let elements = document.getElementById('blog_classify_form').elements;
    for (let i = 0; i < children.length; i++) {
        if (elements[i].name === 'color'){
            elements[i].value = children[i].firstElementChild.getAttribute('data-blog-color');
            continue;
        }
        if (elements[i].name === 'id'){
            elements[i].value= children[i].getAttribute('data-blog-id');

            continue;
        }
        elements[i].value  =  children[i].innerText;
    }
    document.getElementById('blog_classify_edit').innerHTML = '<span>修改分类</span>'
}

//delete
function blog_classify_del(id){
    document.getElementById('blog_classify_del').addEventListener('click',function () {
        $.get({
            url:'/classifyController/delete?id='+id,
            success:function () {
                getList(1,10);
                blog_fn_loadCharts();
            }
        })
    })
}


/*===========================================================================================classify  end===============================================================*/



/*=============================================================tags start====================================================================================*/
let words=[] ;
words.push({text:'',weight:0,link:'',html:''});




//更新标签云
function blog_fn_loadJCloud() {
    $.get({
        url:'/tagsController/getNumAndName',
        success:function (res) {
            if (res.success){
                let dataR = res.data;
                words.length =0;
                for (let i = 0; i < dataR.length; i++) {
                    words.push({text:dataR[i].tagsName,weight:dataR[i].tagsNum,link:'#'});
                }
                //  $('#blog_tags_id_jCloud').jQCloud('destroy');
                //   $('#blog_tags_id_jCloud').jQCloud(words, {
                //       autoResize: true,
                //   });
                $('#blog_tags_id_jCloud').jQCloud('update', words);

            }
        }
    });

}

//分页控件
function blog_tags_page(currentPage) {
    let pageSize = document.getElementById('blog_tags_show_pageSize').value;
    getList1(currentPage,pageSize);

}

let pageDataTags ; //记录分页值
/**
 *  分页获取数据
 * @param currentPage 当前页
 * @param pageSize 每页大小
 * @param queryPerm 查询参数，对象类型
 */
function getList1(currentPage,pageSize,queryPerm){
    if (currentPage === undefined || currentPage <=0 ){
        currentPage =1;
    }
    if(pageSize === undefined || pageSize <=0){
        pageSize =10;
    }
    pageDataTags ={currentPage:currentPage,pageSize:pageSize,p:queryPerm};
    //查询标签数据
    jQuery.ajax({
        type:'post',
        url:'/tagsController/list',
        data:pageDataTags,
        success:function (data) {
            if (data.success && data.data.list.length != 0){
                f1(data.data);
            }else {
                $('#blogs_tbody').html('<tr><td colspan="6" style="text-align: center;color: rgba(155,156,157,0.59)">暂无数据！</td></tr>');
            }
        }
    });


}



//封装table
function f1(data) {
    let tableData = data.list;
    //填充表格数据
    let tbody ='';
    for ( let i = 0; i < tableData.length; i++) {//循环json对象，拼接tr,td的html
        tbody = tbody + '<tr>';
        tbody = tbody + '<td  data-blog-id = '+tableData[i].id+' ><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>';
        tbody = tbody + '<td>' + tableData[i].tagsName + '</td>';
        tbody = tbody + '<td>' + tableData[i].tagsKey + '</td>';
        tbody = tbody + '<td>' + tableData[i].tagsNum + '</td>';
        tbody = tbody + '<td><span class="blog-color" data-blog-color = '+tableData[i].color+' style="background-color: '+tableData[i].color+'"></span></td>';
        tbody = tbody + '<td>' + tableData[i].sort + '</td>';
        tbody = tbody + '<td><div class="btn-list flex-nowrap"><a  onclick="blog_tags_edit(this)"  class="btn btn-light btn-pill ">Edit</a><a  data-bs-toggle="modal" data-bs-target="#modal-danger" onclick="blog_tags_del('+tableData[i].id+')" class="btn btn-light  btn-pill">del</a></div> </td>';
        tbody = tbody + '</tr>';
    }
    $('#blogs_tbody').html(tbody);

    //分页栏
    let dataFooter = $('#blog_tags_data_footer');
    dataFooter.html('');
    dataFooter.append('<p class="m-0 text-muted">A Total  of <span>'+data.total+'</span> entries</p>');
    let footer ='<ul class="pagination m-0 ms-auto" >\n' +
        '                                    <li class="page-item '+(data.firstPage?'disabled':'')+'" '+(data.firstPage?'':'onclick="blog_tags_page(--pageDataTags.currentPage)"')+'  >\n' +
        '                                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">\n' +
        '                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="15 6 9 12 15 18"></polyline></svg>\n' +
        '                                            prev' +
        '                                        </a>' +
        '                                    </li>';
    for (let j =1; j <= data.totalPage;j++){
        footer+=' <li class="page-item '+(data.currentPage == j ? 'active' : '')+' " onclick=blog_tags_page('+j+')><a class="page-link" href="#">'+j+'</a></li>';
    }
    footer+= '' +
        '                                    <li class="page-item '+(data.lastPage ?'disabled':'')+'" '+(data.lastPage?'':'onclick="blog_tags_page(++pageDataTags.currentPage)"')+'  >\n' +
        '                                        <a class="page-link" href="#">\n' +
        '                                            next\n' +
        '                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="9 6 15 12 9 18"></polyline></svg>\n' +
        '                                        </a>\n' +
        '                                    </li>\n' +
        '                                </ul>';

    dataFooter.append(footer);
}




//修改或者添加标签数据
function blog_tags_submit() {
    jQuery.ajax({
        type:'post',
        url:'/tagsController/save',
        data:$('#blog_tags_form').serializeObject(),
        success:function (data) {

            $('#blog_tags_form')[0].reset();
            getList1(1,10);
            blog_fn_loadJCloud();
            document.getElementById('blog_tags_edit').innerHTML = '<span>添加标签</span>';
            document.getElementById('tagsId').value =null;
        },
        error:function (data) {

        }
    });


}

//edit 按钮
function blog_tags_edit(ele){
    let children = ele.parentNode.parentNode.parentNode.children;
    let elements = document.getElementById('blog_tags_form').elements;
    for (let i = 0; i < children.length; i++) {
        if (elements[i].name === 'color'){
            elements[i].value = children[i].firstElementChild.getAttribute('data-blog-color');
            continue;
        }
        if (elements[i].name === 'id'){
            elements[i].value= children[i].getAttribute('data-blog-id');

            continue;
        }
        elements[i].value  =  children[i].innerText;
    }
    document.getElementById('blog_tags_edit').innerHTML = '<span>修改标签</span>'
}

//delete
function blog_tags_del(id){
    document.getElementById('blog_tags_del').addEventListener('click',function () {
        $.get({
            url:'/tagsController/delete?id='+id,
            success:function () {
                getList1(1,10);
                blog_fn_loadJCloud();
            }
        })
    })
}
/*=======================================================================tags end============================================================*/

/*============================================================gallery start ============================================================*/
let gFiles;
let arr;

//图片列表
let pageDataGallery={currentPage:0,pageSize:12,p:{}} ; //记录分页值
function imgList(currentPage,pageSize){
    if (currentPage === undefined || currentPage <=0 ){
        currentPage =1;
    }
    if(pageSize === undefined || pageSize <=0){
        pageSize =12;
    }

    pageDataGallery.currentPage =currentPage;
    pageDataGallery.pageSize =pageSize;

    jQuery.ajax({
        type:'post',
        url:'/galleryController/list',
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        data:JSON.stringify(pageDataGallery),
        beforeSend:function(){
            $('#blog_gallery_cards').append($('div[data-z-placeholder="1"]'));
            $('div[data-z-placeholder="1"]').show();
            document.getElementById('blogLoad').classList.remove('blog-display')
        },
        success:function (data) {
            if (data.success ){
                imgF(data.data);
                document.getElementById('blogLoad').classList.add('blog-display')
                if (data.data.list &&  data.data.list.length<pageDataGallery.pageSize){
                    window.zScrollObj.gallery=false;
                    document.getElementById('blogLoad').classList.add('blog-display');
                    document.getElementById('blogBottom').classList.remove('blog-display');
                }

            }else {

                //  $('#blogs_tbody').html('<tr><td colspan="6" style="text-align: center;color: rgba(155,156,157,0.59)">暂无数据！</td></tr>');
            }
        },
        complete :function (e) {
            $('div[data-z-placeholder="1"]').hide();
        }
    });
}

function imgF(data){
    let tableData = data.list;
    //填充表格数据
    let divs = '';
    for ( let i = 0; i < tableData.length; i++) {//循环json对象
        let row = tableData[i];
        let div =
            '<div class="col-sm-6 col-lg-4">                <div class="card card-sm"> ' +
            '                  <a href="JavaScript:void(0)" class="d-block"><img style="object-fit:cover;height: 275px;" onerror="imgDefault(this)" src="'+row.path+'" class="card-img-top"></a> ' +
            '                  <div class="card-body"> ' +
            '                    <div class="d-flex align-items-center"> ' +
            '                      <div onblur="blog_gallery_save(this)" data-gallery-save-id="'+row.id+'"  class="text-muted blog-gallery" style="max-width: 116px;max-height:20px;">'+row.imgName+'</div> ' +
            '                      <div class="ms-auto"> ' +
            '                        <a href="javascript:void(0);" title="edit" onclick="blog_gallery_edit(this)" class="text-muted"> ' +
            '                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> ' +
            '                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> ' +
            '                            <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"></path> ' +
            '                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"></path> ' +
            '                            <line x1="16" y1="5" x2="19" y2="8"></line> ' +
            '                          </svg></a> ' +
            '                        <a href="javascript:void(0);"    data-bs-toggle="modal"  data-bs-target="#modal-danger"  title="delete" onclick="blog_gallery_delete(this)" class="ms-3 text-muted"> ' +
            '                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> ' +
            '                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> ' +
            '                            <line x1="4" y1="7" x2="20" y2="7"></line> ' +
            '                            <line x1="10" y1="11" x2="10" y2="17"></line> ' +
            '                            <line x1="14" y1="11" x2="14" y2="17"></line> ' +
            '                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path> ' +
            '                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path> ' +
            '                          </svg> ' +
            '                        </a> ' +
            '                      </div> ' +
            '                    </div> ' +
            '                  </div> ' +
            '              </div></div>';
        divs+=div;
    }
    window.requestAnimationFrame(function (e) {
        $('#blog_gallery_cards').append(divs);

    })
}



//图片加载不到时默认图片代替
function imgDefault(ele) {
    ele.src = '/img/4041.jpeg';
}
function imgHeardDefault(ele) {
    ele.src = '/medias/Anonymous.jpg';
}


//修改名称
function blog_gallery_save(ele) {
    let data = { id:ele.getAttribute('data-gallery-save-id'),imgName:ele.innerText.trim()};
    $.ajax({
        type:'post',
        url:'/galleryController/save',
        data:data,
        success:function (res) {
            if (res.success){
                ele.setAttribute('contenteditable','false');
                ele.nextElementSibling.firstElementChild.firstElementChild.style.color= '#626976'
            }
        }
    })
}

function blog_gallery_edit(ele) {
    let nameDiv = ele.parentElement.previousElementSibling;
    let range = document.createRange();
    let selection = window.getSelection();
    nameDiv.setAttribute('contenteditable','true');
    nameDiv.focus();
    let span = ele.firstElementChild;
    span.style.color= 'blue';

    range.selectNodeContents(nameDiv);
    selection.removeAllRanges();
    selection.addRange(range)

}

//删除
function blog_gallery_delete(ele){
    let id = ele.parentElement.previousElementSibling.getAttribute('data-gallery-save-id');
    document.getElementById('blog_gallery_del').addEventListener('click',function () {
        $.get({
            url:'/galleryController/delete?id='+id,
            success:function () {
                getList(1,10);
                blog_fn_loadCharts();
            }
        })
    })
}



//上传文件
function fileUpload() {
    let dis = document.querySelector('textarea[name=imgName]').value;
    if (arr.length != dis.split(',').length){
        console.log('长度不一致');
        return;
    }
    let xhr = new XMLHttpRequest();
    let formData = new FormData();
    let g =gFiles.length < 6?gFiles.length:6;
    for (let i = 0; i < g; i++) {
        formData.append('$cusFiles_v',gFiles[i]);
    }


    formData.append('fileNames',dis);
    formData.append('fileMD5s',arr);
    xhr.open('post','/galleryController/fileUpload');
    xhr.send(formData);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200 ){
            let res = JSON.parse(xhr.responseText);
            if (res.success ){
                $('#modal-team').modal('hide');
                imgList(1,12);
            }
        }
        if(xhr.readyState === 4 && xhr.status !== 200 ){
            errMsg();
        }
    };


}

//点击选择图片
function addPic() {
    // document.getElementById('$cusFiles_v').onclick
    $('input[id="$cusFiles_v"]').click();
}



//错误提示
function errMsg() {
    let h1 = document.getElementById('errMsg');
    h1.innerText = 'Upload Fail';
    h1.style.color =  'red'
}
/*============================================================================gallery end====================================================================*/

/*=================================================================publish  start=============================================================================*/


//MD编辑器
let editor_s ;
let typed;
function sfm(len) {
    if ((len / 60)>1){
        return parseInt( len/60 ) +'分钟';
    }else {
        return '1分钟';
    }

}
function publish(boo,el) {
    let data ={
        id:document.getElementById("blogListArticleId").value?document.getElementById("blogListArticleId").value:null,
        isOriginal: $('#isOriginal').val() === '1'?true:false,
        title:$('#title').val(),
        classifyId:$("input[name='classifyId']:checked").val(),
        tagsIds:"",
        galleryId:$('#galleryId').val(),
        publishDate:document.getElementById('publishDate').value?document.getElementById('publishDate').value:new Date().toLocaleDateString(),
        isPraise:false,
        isUp:false,
        isReview:false,
        isDeclare:false,
        isPublic:$('#blogListIsPublic')[0].checked,
        isDraft:boo,
        words:'0',
        duration:'0',
        content:'0',
        contentMd:'0',
        contentHtml:'0',
        href:document.getElementById("blogHref").value?document.getElementById("blogHref").value:null,
    };

    let arry = [];
    $('input[name="tagsIds"]:checked').each(function(index, element) {
        arry.push($(this).val());
    });
    data.tagsIds=arry.join(",");

    $('span[data-blog-selected="1"]').each(function(index, element) {
        data[$(this).attr('data-blog-tagname')] =true;

    });
    $('#blogListIsPublic')
    let contentMd = editor_s.getMarkdown();
    let contentHtml = editor_s.getHTML();
    data.contentMd =contentMd;
    data.contentHtml =contentHtml;
    data.words =document.getElementById('form-label').value.length;

    let len =  data.words  / 4;
    data.duration =  sfm(len); //计算阅读时长  分钟

    if (!data.content.trim() || !data.tagsIds || !data.classifyId || !data.galleryId ){
        blogAlter('≡(▔﹏▔)≡~','好像有东西没有填~','warning');
        return
    }
    $.ajax({
        url:'/blogBlogs/save',
        type:'post',
        data:JSON.stringify(data),
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        beforeSend:function(xhr){
            el.classList.add("disabled");
        },
        success:function (result) {
            if (result.success){
                blogAlter('文章已发布','快去主页看看吧~','success');
              //  reset_b();
            }else {
                blogAlter('≡(▔﹏▔)≡~','咋回事，发布失败噢~','warning')
            }
        },
        error:function (e) {
            blogAlter('≡(▔﹏▔)≡~','咋回事，好像断网了~','warning')
        },
        complete:function (result) {
            el.classList.remove("disabled");
        }
    })
}

function reset_b() {
    setTimeout(function () {
        location.reload();
    },4000)
}

function blog_publish_zhezhao() {
    document.getElementById('modal-1').classList.remove('blogs-hide');
    let debounce1 = debounce(init);
    debounce1();

}
// 防抖
function debounce(fn, delay = 300) {
    return () => {
        var timer = null;
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn()
        }, delay)
    }
}

// 生成随机数
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

// 获取 element 的属性
function getElStyle(el, property) {
    let elStyle = window.getComputedStyle(el);
    let elProperty = elStyle.getPropertyValue(property);
    if (isNaN(parseInt(elProperty))){
        elProperty = el.offsetWidth;
    }
    return elProperty
}

// 获取数组最小值下标
function getMinIndex(arr) {
    let min = Math.min(...arr);
    let minIndex = arr.indexOf(min);
    return minIndex
}

// 生成列
function generateColumn() {
    // 获取瀑布流容器及宽度
    let container = document.getElementById('all');

    let containerWidth = getElStyle(container, 'width');
    // 窗口大小变化时清空瀑布流 DOM 下的所有子节点
    container.innerHTML = '';
    //console.log('瀑布流容器宽度', containerWidth)
    // 计算列数
    let column = Math.floor(parseInt(containerWidth) / 305);
   // console.log('列数', column)
    if (column > 0) {
        // 循环插入列
        for (let i = 0; i < column; i++) {
            let element = document.createElement('div');
            element.className = 'column';
            container.appendChild(element)
        }
    }
}

// 计算最低列并插入 DOM
let  currentPage = 0;
let send = true;
let imgArr = [];
function getImg() {
    if (!send) {
        return
    }
    let pageData = {currentPage: ++currentPage, pageSize: 30,p:{type:"gallery"}};
    //查询图片列表
    jQuery.ajax({
        type: 'post',
        url: '/galleryController/list',
        contentType: "application/json;charset=utf-8",
        data:JSON.stringify(pageData),
        dataType:'json',
        success: function (data) {

            if (data.success && data.data.list.length != 0) {
                let list = data.data.list;
                // for 循环（插入30次）高度最矮的列，插入图片（没有图片我用元素代替）
                for (let i = 0; i < list.length; i++) {
                    let obj = {id: list[i].id, imgName: list[i].imgName, path: list[i].path};
                    imgArr.push(obj);
                }
            }else {
                send =false;
            }
        }
    });
}


function insertDom(){

    if (imgArr.length<=0){
        return
    }

    for (let i = 0; i < imgArr.length; i++) {
        let div = document.createElement('div');
        div.style.borderRadius = '5px';
        div.style.marginBottom ='10px';
        div.setAttribute('data-galleryid',imgArr[i].id);
        div.addEventListener("click", function () {
            let element = document.querySelector('div[data-img=img]');
            if (element){
                element.removeAttribute('data-img');
                element.classList.remove('img-border');
            }
            this.setAttribute('data-img','img');
            this.classList.add('img-border');
        });
        let imgEle = document.createElement('img');
        div.appendChild(imgEle);
        imgEle.className = 'col-child';
        imgEle.src =imgArr[i].path;

        // 获取所有列的 DOM （伪数组）
        let allColumn = document.querySelectorAll('.column');
        if (allColumn.length) {
            // 转换成数组
            let _allColumn = Array.prototype.slice.call(allColumn);
            // 循环转换获取所有列的高度
            let allColumnHeight = [];
            for (let i = 0; i < _allColumn.length; i++) {
                allColumnHeight.push(parseInt(getElStyle(_allColumn[i], 'height')))
            }
            // 获取最小高度的下标
            let minHeightIndex = getMinIndex(allColumnHeight);
            // 最小高度列插入瀑布块儿
            allColumn[minHeightIndex].appendChild(div)

        }
    }


}

// 窗口 change 事件
function init() {
    generateColumn();
    insertDom()
}



//将字符串转化为dom元素
function strToElePublish(str) {
    const template =`  <label class="form-selectgroup-item">${str}</label>`;
    let tempEle = document.createElement('div');
    tempEle.innerHTML = template;
    return tempEle.firstElementChild;
}
function blog_publish_classify(id,list,param,type) {
    let elementById = document.getElementById(id);
    for (let i = 0; i < list.length; i++) {
        let s = '<input type="'+type+'" name="'+param.eleName+'" value="'+list[i][param.value]+'" class="form-selectgroup-input">\n' +
            '  <span class="form-selectgroup-label">'+list[i][param.name]+'</span>';
        elementById.appendChild(strToElePublish(s))
    }
}

/*=======================================================publish  end ================================================================================*/

/*=======================================================guest  start ================================================================================*/
let pageDataGuestBook={currentPage:0,pageSize:10,p:null};
function guestIsRead(id) {
    $.get({
        url:'/GuestBookController/isRead?id='+id,
        success:function (data) {
            if (data.success){
                let element = document.querySelector('span[data-guest-read="'+id+'"]');
                if (element){
                    element.remove();
                }
            }
        }
    })

}
function delete_b(e){
    $.get({
        url:'/GuestBookController/recycle?id='+e.getAttribute('data-guest-id'),
        success:function (res) {
            if (res.success){
                guestDateList();
                blogAlter('完成了','该条评论已经放入回收站哦~');
            }else {
                blogAlter('┗|｀O′|┛ 嗷~~','可能发生了一点小故障~')
            }

        }
    });
}


/*=======================================================blogBlogs  start ================================================================================*/
let pageDataBlogs={start:0,pageSize:6,p:null};

/*=======================================================tools  start ================================================================================*/

//图表


//加载图表
function blog_tools_loadCharts() {
    $.get({
        url:'/toolsController/getNumAndName',
        success:function (res) {
            if (res.success){
                let  toolsDate=[];
                let optionsTools = {
                    chart: {
                        type: "treemap",
                    },
                    series: [
                        {
                            data: res.data
                        },
                    ],
                    dataLabels: {
                        enabled: false
                    },
                    colors: ["#2b5886"],
                    title: {
                        text: "导航使用热力图",
                        style: {color:'#FFF'}
                    }
                };
                chart = new ApexCharts(document.querySelector("#blog_tools_id_chart"), optionsTools);
                chart.render();
            }
        }
    });

}

//分页控件
function blog_tools_page(currentPage) {
    let pageSize = document.getElementById('blog_tools_show_pageSize').value;
    getToolsList(currentPage,pageSize);

}

let pageDataTools ; //记录分页值
/**
 *  分页获取数据
 * @param currentPage 当前页
 * @param pageSize 每页大小
 * @param queryPerm 查询参数，对象类型
 */
function getToolsList(currentPage,pageSize,queryPerm){
    if (currentPage === undefined || currentPage <=0 ){
        currentPage =1;
    }
    if(pageSize === undefined || pageSize <=0){
        pageSize =10;
    }
    pageDataTools ={currentPage:currentPage,pageSize:pageSize,p:queryPerm};
    //查询分类数据
    jQuery.ajax({
        type:'post',
        url:'/toolsController/list',
        data:pageDataTools,
        success:function (data) {
            if (data.success && data.data.list.length != 0){
                toolsF(data.data);
            }else {
                $('#blogs_tbody').html('<tr><td colspan="6" style="text-align: center;color: rgba(155,156,157,0.59)">暂无数据！</td></tr>');
            }
        }
    });
}



//封装table
function toolsF(data) {
    let tableData = data.list;
    //填充表格数据
    let tbody ='';
    for ( let i = 0; i < tableData.length; i++) {//循环json对象，拼接tr,td的html
        tbody = tbody + '<tr>';
        tbody = tbody + '<td  data-blog-id = '+tableData[i].id+' ><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>';
        tbody = tbody + '<td>' + tableData[i].title + '</td>';
        tbody = tbody + '<td>' + tableData[i].href + '</td>';
        tbody = tbody + '<td><img  data-blog-img='+tableData[i].img+' style="max-width: 32px;object-fit: cover" src=" ' + tableData[i].img + '"</td>';
        tbody = tbody + '<td><span class="blog-color" data-blog-color = '+tableData[i].color+' style="background-color: '+tableData[i].color+'"></span></td>';
        tbody = tbody + '<td>' + tableData[i].type + '</td>';
        tbody = tbody + '<td>' + tableData[i].heap + '</td>';
        tbody = tbody + '<td ><div style="max-width:20rem;overflow:hidden" title="' + tableData[i].des + '">' + tableData[i].des + '</div></td>';
        tbody = tbody + '<td><div class="btn-list flex-nowrap"><a  onclick="blog_tools_edit(this)"  class="btn btn-light btn-pill ">Edit</a><a  data-bs-toggle="modal" data-bs-target="#modal-danger" onclick="blog_tools_del('+tableData[i].id+')" class="btn btn-light  btn-pill">del</a></div> </td>';
        tbody = tbody + '</tr>';
    }
    $('#blogs_tbody').html(tbody);

    //分页栏
    let dataFooter = $('#blog_tools_data_footer');
    dataFooter.html('');
    dataFooter.append('<p class="m-0 text-muted">A Total  of <span>'+data.total+'</span> entries</p>');
    let footer ='<ul class="pagination m-0 ms-auto" >\n' +
        '                                    <li class="page-item '+(data.firstPage?'disabled':'')+'" '+(data.firstPage?'':'onclick="blog_tools_page(--pageDataTools.currentPage)"')+'  >\n' +
        '                                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">\n' +
        '                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="15 6 9 12 15 18"></polyline></svg>\n' +
        '                                            prev' +
        '                                        </a>' +
        '                                    </li>';
    for (let j =1; j <= data.totalPage;j++){
        footer+=' <li class="page-item '+(data.currentPage == j ? 'active' : '')+' " onclick=blog_tools_page('+j+')><a class="page-link" href="#">'+j+'</a></li>';
    }
    footer+= '' +
        '                                    <li class="page-item '+(data.lastPage ?'disabled':'')+'" '+(data.lastPage?'':'onclick="blog_tools_page(++pageDataTools.currentPage)"')+'  >\n' +
        '                                        <a class="page-link" href="#">\n' +
        '                                            next\n' +
        '                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="9 6 15 12 9 18"></polyline></svg>\n' +
        '                                        </a>\n' +
        '                                    </li>\n' +
        '                                </ul>';

    dataFooter.append(footer);
}




//修改或者添加分类数据
function blog_tools_submit() {
    jQuery.ajax({
        type:'post',
        url:'/toolsController/save',
        data:$('#blog_tools_form').serializeObject(),
        success:function (data) {

            $('#blog_tools_form')[0].reset();
            getToolsList(1,10);
            blog_tools_loadCharts();
            document.getElementById('blog_tools_edit').innerHTML = '<span>添加分类</span>';
            document.getElementById('toolsDataId').value =null;
        },
        error:function (data) {
            blogAlter('保存失败了','报错拉，赶紧看看吧~','error')
        }
    });
}

function blog_tools_reset(el,title) {
    let elementById = document.getElementById(el);
    elementById.classList.remove('pulse');
    elementById.classList.remove('animated');
    $('form')[0].reset();
    document.getElementById(el).innerText=title;
}

//edit 按钮
function blog_tools_edit(ele){
    let elementById = document.getElementById('blog_tools_edit');
    elementById.classList.remove('pulse');
    elementById.classList.remove('animated');
    let children = ele.parentNode.parentNode.parentNode.children;
    let elements = document.getElementById('blog_tools_form').elements;
    for (let i = 0; i < children.length; i++) {

        if (elements[i].name === 'color'){
            elements[i].value = children[i].firstElementChild.getAttribute('data-blog-color');
            continue;
        }
        if (elements[i].name === 'id'){
            elements[i].value= children[i].getAttribute('data-blog-id');
            continue;
        }
        if (elements[i].name === 'img'){
            elements[i].value= children[i].firstElementChild.getAttribute('data-blog-img');
            continue;
        }
        elements[i].value  =  children[i].innerText;
    }

    elementById.innerHTML = '修改站点信息';
    elementById.classList.add('pulse');
    elementById.classList.add('animated');
    toTop();
}

//delete
function blog_tools_del(id){
    document.getElementById('blog_tools_del').addEventListener('click',function () {
        $.get({
            url:'/toolsController/delete?id='+id,
            success:function () {
                getToolsList(1,10);
                blog_tools_loadCharts();
            }
        })
    })
}
