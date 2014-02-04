# data-metrics

version: 0.6.1

> data-metrics is a data-attribute in HTML tags for register your metrics in Google Analytics.

## Getting Started

Installing with Bower. See any examples of use [here](http://marloscarmo.github.io/data-metrics/).

### Bower 

`
bower install data-metrics
`

### Usage Example

Add your Google Analytics tag.

```html
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-XXXXXXXX-X', 'your URL');
  ga('send', 'pageview');
</script>
```
`'UA-XXXXXXXX-X'` Insert your GA id.

`'your URL'` Insert your URL domain. For local tests not indetify your URL, put  `'none'`.

***
Insert the data-metrics script.

```html
<script type="text/javascript" src="js/dist/data-metrics.js"></script>
```
***
Add the attribute to the tag you want measure.

```html
<button data-metrics="Documents|Click|JavaScript Ebook">Add metrics</button>
```
Other examples [here](http://marloscarmo.github.io/data-metrics/).

### Using JavaScript

You can use JavaScript to measure custom items.

**Pure JavaScript**
```js
document.querySelector('.click-image').onclick = function() {
  dataMetrics.sendToGA('Images', 'Click', 'Marlos Carmo');
}
```

**jQuery**
```js
$('.click-image').click(function() {
  dataMetrics.sendToGA('Images', 'Click', 'Marlos Carmo');
});
```

### Examples

[See any examples of **data-metrics** use](http://marloscarmo.github.io/data-metrics/)

## Contribuitors

* Marlos Carmo [@marloscarmo](https://github.com/marloscarmo)
* Erick Belfort [@erickbelfy](https://github.com/erickbelfy)
* Ruy Adorno [@ruyadorno](https://github.com/ruyadorno)


## License

Licensed under the MIT License
