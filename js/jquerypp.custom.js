(function(){var b=jQuery.event,a=function(o,j,n,e){var p,l,k,m,g,i,c,d,f;for(p=0;p<j.length;p++){l=j[p];m=l.indexOf(".")<0;if(!m){c=l.split(".");l=c.shift();d=new RegExp("(^|\\.)"+c.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}k=(o[l]||[]).slice(0);for(g=0;g<k.length;g++){i=k[g];f=(m||d.test(i.namespace));if(f){if(e){if(i.selector===e){n(l,i.origHandler||i.handler)}}else{if(e===null){n(l,i.origHandler||i.handler,i.selector)}else{if(!i.selector){n(l,i.origHandler||i.handler)}}}}}}};b.find=function(i,h,c){var g=($._data(i)||{}).events,d=[],f,e,j;if(!g){return d}a(g,h,function(l,k){d.push(k)},c);return d};b.findBySelector=function(f,e){var d=$._data(f).events,c={},g=function(i,l,k){var h=c[i]||(c[i]={}),j=h[l]||(h[l]=[]);j.push(k)};if(!d){return c}a(d,e,function(j,i,h){g(h||"",j,i)},null);return c};b.supportTouch="ontouchend" in document;$.fn.respondsTo=function(c){if(!this.length){return false}else{return b.find(this[0],$.isArray(c)?c:[c]).length>0}};$.fn.triggerHandled=function(c,d){c=(typeof c=="string"?$.Event(c):c);this.trigger(c,d);return c.handled};b.setupHelper=function(f,d,e){if(!e){e=d;d=null}var g=function(i){var j,h=i.selector||"";if(h){j=b.find(this,f,h);if(!j.length){$(this).delegate(h,d,e)}}else{if(!b.find(this,f,h).length){b.add(this,d,e,{selector:h,delegate:this})}}},c=function(i){var j,h=i.selector||"";if(h){j=b.find(this,f,h);if(!j.length){$(this).undelegate(h,d,e)}}else{if(!b.find(this,f,h).length){b.remove(this,d,e,{selector:h,delegate:this})}}};$.each(f,function(){b.special[this]={add:g,remove:c,setup:function(){},teardown:function(){}}})}})(jQuery);(function(c){var h=/Phantom/.test(navigator.userAgent),e=!h&&"ontouchend" in document,f="touchmove scroll",i=e?"touchstart":"mousedown",g=e?"touchend":"mouseup",a=e?"touchmove":"mousemove",d=function(j){var k=j.originalEvent.touches?j.originalEvent.touches[0]:j;return{time:(new Date).getTime(),coords:[k.pageX,k.pageY],origin:c(j.target)}};var b=c.event.swipe={delay:500,max:75,min:30};c.event.setupHelper(["swipe","swipeleft","swiperight","swipeup","swipedown"],i,function(m){var p=d(m),k,l=m.delegateTarget||m.currentTarget,j=m.handleObj.selector,o=this;function n(q){if(!p){return}k=d(q);if(Math.abs(p.coords[0]-k.coords[0])>10){q.preventDefault()}}c(document.documentElement).bind(a,n).one(g,function(t){c(this).unbind(a,n);if(p&&k){var r=Math.abs(p.coords[0]-k.coords[0]),q=Math.abs(p.coords[1]-k.coords[1]),u=Math.sqrt(r*r+q*q);if(k.time-p.time<b.delay&&u>=b.min){var s=["swipe"];if(r>=b.min&&q<b.min){s.push(p.coords[0]>k.coords[0]?"swipeleft":"swiperight")}else{if(q>=b.min&&r<b.min){s.push(p.coords[1]<k.coords[1]?"swipedown":"swipeup")}}c.each(c.event.find(l,s,j),function(){this.call(o,m,{start:p,end:k})})}}p=k=undefined})})})(jQuery);