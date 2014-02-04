# data-metrics

version: 0.6.4

> data-metrics is a [data-attribute](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes) that allows you to easily track Google Analytics metrics in your HTML page.


## Getting Started

See examples of use [here](http://marloscarmo.github.io/data-metrics/bower_components/data-metrics/example/).

### Installing with Bower

`
bower install data-metrics
`

### Usage Example

Add your Google Analytics tag:

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
Replace `'UA-XXXXXXXX-X'` with your GA id.

`'your URL'` Insert your URL domain or set it as `'none'` for local testing.

- - -
Insert the data-metrics script.

```html
<script type="text/javascript" src="bower_components/data-metrics/dist/data-metrics.js"></script>
```
- - -
Add the **data-metrics** attribute and its values on the element to be tracked.

```html
<button data-metrics="Documents|Click|JavaScript Ebook">Add metrics</button>
```

Browse other examples [here](http://marloscarmo.github.io/data-metrics/bower_components/data-metrics/example/).

## Using the JavaScript API

You can also use the programatically API to track custom items.

**Vanilla JavaScript**

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

[See more examples of **data-metrics** usage](http://marloscarmo.github.io/data-metrics/bower_components/data-metrics/example/)

## Contribuitors

* Marlos Carmo [@marloscarmo](https://github.com/marloscarmo)
* Erick Belfort [@erickbelfy](https://github.com/erickbelfy)
* Ruy Adorno [@ruyadorno](https://github.com/ruyadorno)


## License

Licensed under the MIT License
