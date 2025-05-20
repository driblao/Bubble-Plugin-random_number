function(instance, properties, context) {
  
  var min_initial = properties.min;
  var max_initial = properties.max;
  
  if (min_initial > max_initial) {
    var min = max_initial;
    var max = min_initial;
  } else {
    var min = min_initial;
    var max = max_initial;
  }
  
  var number = Math.floor(Math.random() * (max - min + 1)) + min;
  instance.publishState("random_number", number);
  	
}