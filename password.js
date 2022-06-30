const convertPass = function(arg) {
  let password = ''

  for (let i = 0; i < arg.length; i++) {
    if (arg[i] === 'a') {
      password += '4'
    } else if (arg[i] === 'e') {
      password += '3'
      
    }else if (arg[i] === 'o') {
      password += '0'
    }else if (arg[i] === 'l') {
      password += '1'
    } else {
      password += arg[i]
    }
  }
  // return password.replace('a', '4')
  return password
}
console.log(convertPass('lalalandOkyDoki'));