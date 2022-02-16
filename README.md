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
<link href="https://cdn.jsdelivr.net/gh/heny007/Auto-darkmode/light-theme.css" rel="stylesheet" media="(prefers-color-scheme: light)" />
<link href="https://cdn.jsdelivr.net/gh/heny007/Auto-darkmode/dark-theme.css" rel="stylesheet" media="(prefers-color-scheme: dark)" />
```
