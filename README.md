<h1 align="center">auto-darkmode</h1>

<p align="center">سكريبت الوضع الليلي التلقائي</p>

## الخطوة الأولى 
ابحث في القالب عن وسم 
</ body>           
و ضع الكود فوقه مباشرة

```js

<script>
        // Fall back if the browser doesn't support prefers-color-scheme
        if (window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
            // Hide content until CSS loads to prevent show unstyled code.
            document.documentElement.style.display = 'none';

            // Insert stylesheet with onload event to show page content.
            document.head.insertAdjacentHTML(
                'beforeend',
                '<link href="https://cdn.jsdelivr.net/gh/heny007/Auto-darkmode/dark-theme.css" rel="stylesheet" onload="document.documentElement.style.display=\'\'" />'
            );
        }
    </script>

```

## الخطوة الثانية
ابحث في القالب عن وسم
</ head>      
و ضع الكود فوقه مباشرة

```scss
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/heny007/Auto-darkmode/light-theme.css" rel="stylesheet" media="(prefers-color-scheme: light)" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/heny007/Auto-darkmode/dark-theme.css" rel="stylesheet" media="(prefers-color-scheme: dark)" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@forevolve/bootstrap-dark@1.1.0/dist/css/bootstrap-dark.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@forevolve/bootstrap-dark@1.1.0/dist/css/bootstrap-prefers-light.min.css" />
```



<p align="center">او يمكنك عمل زر الوضع اليلي من هنا</p>

## الخطوة الأولى 
ابحث في القالب عن وسم 
</ body>           
و ضع الكود فوقه مباشرة

```scss
<style>
.darkmode--activated p, .darkmode--activated li {
  color: #000;
}

.button {
  isolation: isolate;
}

.darkmode--activated .logo {
  mix-blend-mode: difference;
}
.darkmode-layer, .darkmode-toggle {
  z-index: 500;
}
</style>
```

## الخطوة الثانية
ابحث في القالب عن وسم
</ head>      
و ضع الكود فوقه مباشرة

```js
<script src="https://cdn.jsdelivr.net/gh/heny007/Auto-darkmode/darkmode-js.min.js"></script>
<script>
  function addDarkmodeWidget() {
    new Darkmode().showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);
const options = {
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();
</script>
```
