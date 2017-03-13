module.exports={



getPrimes: function(number)    
{
  if (number < 2)
  {
    return [];
  }
  var primes = [2,3];
  for(var count = 5; count <= number; count++){
    var prime = true;
    var root = Math.ceil(Math.pow(count, 0.5));
    for(var i = 2; i <= root; i++){
      if(count % i === 0){
        prime = false;
        }
    }
    if(prime){
      primes.push(count)
    }
  }
  return primes
}
}