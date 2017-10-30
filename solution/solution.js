module.exports = function (readline, print, putstr) {
  let isPhoneValid = (phone, phonesArray, index) => {
    if (!phonesArray) return false
    let char = parseInt(phone[index])
    if (index === phone.length - 1) {
      let posNumber = phonesArray[char]
      if (posNumber != null && posNumber.length) return false
      phonesArray[char] = false
      return true
    }
    if (phonesArray[char] == null) phonesArray[char] = new Array(10)
    return isPhoneValid(phone, phonesArray[char], index + 1)
  }

  let qtdList = null
  let qtdTested = 0
  let phones = new Array(10)
  let isListValid = true
  let line = ''

  while (line !== undefined) {
    line = readline()
    if (qtdList === null) {
      qtdList = parseInt(line)
      continue
    }

    if (isListValid) {
      isListValid = isPhoneValid(line, phones, 0)
    }

    qtdTested++
    if (qtdList === qtdTested) {
      print(isListValid ? 'YES' : 'NO')
      phones = new Array(10)
      isListValid = true
      qtdTested = 0
      qtdList = null
    }
  }
}
