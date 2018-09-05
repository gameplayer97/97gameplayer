window.onload=function(){
    var bt=document.getElementById('bt1')
    var cont=document.getElementById('con')
    var top=document.getElementById('contop')
    var main=document.getElementById('main')
    var empty=document.getElementById('empty')
    var btnmenu1=document.getElementById('btnmenu1')
    var btnmenu2=document.getElementById('btnmenu2')
    var maine=document.getElementById('maine')
    var content_main_right1=document.getElementById('content_main_right1')
    var content_main_right2=document.getElementById('content_main_right2')
    var n=1
    window.onload=setInterval(function(){
        c=document.documentElement.clientHeight
        con.style.height=c+"px"
    },1)
    bt.onclick=function(){
        if(n%2==1){
            cont.style.transition='all 0.7s'
            cont.style.width='140px'
            top.style.transition='all 0.7s'
            top.style.paddingLeft='140px'
            main.style.transition='all 0.7s'
            main.style.paddingLeft='140px'
            maine.style.transition='all 0.7s'
            maine.style.left='140px'
            bt.innerHTML='<'
            n++
        }
        else{
            cont.style.transition='all 0.7s'
            cont.style.width='60px'
            top.style.transition='all 0.7s'
            top.style.paddingLeft='60px'
            main.style.transition='all 0.7s'
            main.style.paddingLeft='60px'
            maine.style.transition='all 0.7s'
            maine.style.left='60px'
            bt.innerHTML='>'
            n++
        }
    }
    btnmenu1.onclick=function(){
        content_main_right1.style.display='block'
        content_main_right2.style.display='none'
    }
    btnmenu2.onclick=function(){
        content_main_right1.style.display='none'
        content_main_right2.style.display='block'
    }
    btnmenu2.onmouseover=function(){
        empty.style.transition='all 0.5s'
        empty.style.top='60px'
    }
     btnmenu2.onmouseleave=function(){
        empty.style.transition='all 0.5s'
        empty.style.top='0px'
    }
}    