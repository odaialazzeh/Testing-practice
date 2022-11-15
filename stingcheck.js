
function  stringLength(str) {
  let long = str.length
  if(long >= 1 && long < 10){
    return long;
  } else {
    console.log('Error')
  }
  
}

module.exports =  stringLength;
