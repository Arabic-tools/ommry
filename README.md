# ommry



## Google Analytics
```
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-208155997-5"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-208155997-5'); 
  gtag('config', 'AW-955968979');
</script>

Right before the closing body tag

<script>
function send_conversion(){
// Event snippet for Ommry lead conversion page
  gtag('event', 'conversion', {'send_to': 'AW-955968979/TPpnCN_B6ZQDENPb68cD'});
}
 
var elements = document.getElementsByClassName("theme--dark");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click',send_conversion, false);
}

</script>	





```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
