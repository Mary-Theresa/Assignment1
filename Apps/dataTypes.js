module.exports={
dataTypes: function(n)
{
  if (n === null || n === undefined)          //check for null or undefined
  {
   return 'no value' 
  }
  if (typeof(n) === 'string')  //check for strings
  {
    if (n === '')
    {
      return 0;
    }
    else
    {
      return n.length;
    }
  }
  else if (n === true)          //check for booleans
  {
    return true;
  }
  else if (n === false)          //check for booleans
  {
    return false;
  }
  else if (typeof(n) === 'object')       //check for arrays
  {
    if (typeof(n[0]) === undefined)
    {
      return undefined;
    }
    else if (n.length < 3)
    {
      return undefined;
    }
    else
    {
      return n[2];
    }
  }
  
  else if (typeof(n) === 'number')
  {
    if (n < 100)          //check for numbers
    {
      return 'less than 100';
    }
    else if (n > 100)
    {
      return 'more than 100';
    }
    else
    {
      return 'equal to 100';
    }
  }
  else if(typeof(n) === 'function'){
        return n(true);
      } 
}
}