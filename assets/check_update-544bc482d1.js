var container,ajax;document.getElementById("void-check-update")&&(container=document.getElementById("void-check-update"),(ajax=new XMLHttpRequest).open("get","https://api.github.com/repos/monsterxcn/Typecho-Theme-VOID/releases/latest"),ajax.send(),ajax.onreadystatechange=function(){var e;4==ajax.readyState&&200==ajax.status&&(e=JSON.parse(ajax.responseText),parseFloat(e.tag_name)>VOIDVersion?container.innerHTML="发现新主题版本："+e.name+'。<a href="https://gh.msx.workers.dev/'+e.assets[0].browser_download_url+'">点击下载</a> / <a target="_blank" href="'+e.html_url+'">新版亮点</a><br>您目前的版本：VOID '+String(VOIDVersion)+"。":container.innerHTML="您目前使用的是最新版主题。")});