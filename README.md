# data-metrics v0.5.1

> data-metrics is a data-attribute in HTML tags for register your metrics in Google Analytics.

## Getting Started

You can install using any methods:

### Bower 

`
bower install data-metrics
`

### Usage Example

Add Google Analytics tag

```html
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-35549406-1', 'none');
  ga('send', 'pageview');
</script>
```

## Contribuitors

* [@marloscarmo](https://github.com/marloscarmo)
* [@erickbelfy](https://github.com/erickbelfy)


## License

Licensed under the MIT License
