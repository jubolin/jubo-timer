var timer = new Jubo.connect();

timer.whoami("KLjiumbR3ZkwcrkJJ","86227",function(error) {
  if(!error) {
    timer.subscribe('trigger', function(fields) {
      if(!fields.parameters) return;
      console.log('fields',fields);
      if(fields.parameters.action === 'start') {
        var triggers = 1;
        if(fields.parameters.type === 'always') {
          console.log('start interval');
          var handle = Meteor.setInterval(function() {
            timer.adjust('trigger', triggers++);
          }, fields.parameters.delay);
        } else if(fields.parameters.type === 'once') {
          console.log('start delay');
          var handle = Meteor.setTimeout(function() {
            timer.adjust('trigger', triggers++);
          }, fields.parameters.delay);
        }
      } else if(fields.parameters.action === 'stop') {
        console.log('stop timer');
      }
    });
  }
});

