function DataMetrics() {}

DataMetrics.prototype = {
  init: function() {
    this.getItems();
  },

  getItems: function() {
    var self = this;

    $('*[data-metrics]').click(function(e) {
      if (!$(this).hasClass('sending-metrics')) {
        self.dispatchEvent($(this));
        $(this).addClass('sending-metrics');
        return false;
      } else {
        if ($(this).attr('href')) {
          window.location.href = $(this).attr('href');
        }
      }
    });

    $('form[data-metrics]').submit(function(e) {
      self.dispatchEvent($(this));
      
      if (!$(this).hasClass('sending-metrics')) {
        return false;
      }
    });
  },

  dispatchEvent: function(elem) {
    var params = elem.attr('data-metrics').split('|');
    window.ga('send', 'event', params[0], params[1], params[2], { 'hitCallback': function() {
      if (elem.prop('tagName') === 'A') {
        elem.click();
      }

      if (elem.prop('tagName') === 'FORM') {
        elem.submit();
      }

      elem.removeClass('sending-metrics');
    }});
  }
};

var dataMetrics = new DataMetrics().init();
