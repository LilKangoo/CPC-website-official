
var isIos=function(){var a=self.navigator.userAgent.toLowerCase();return/iphone|ipad|ipod/.test(a)},isIpad=function(){var a=self.navigator.userAgent.toLowerCase();return/ipad/.test(a)};if(isIos()){var popup=document.querySelector(".sticker");setTimeout(function(){popup.remove()},3E3)};
