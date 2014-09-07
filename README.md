# jQuery fillparent

Basic jQuery plugin making a dom element fill its parent. Usefull for images for example.

## Usage

Include the ```jquery.fillparent.min.js```file.

Set some css on your dom:
```
.parent{
    potision:relative/fixed/absolute;
}
.parent img.example{
    position:absolute;
}
```

Apply plugin

```
$('img.example').fillparent();
```

Apply on div with an image, use it on window resize for continuously stretching.