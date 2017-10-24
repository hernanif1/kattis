module.exports = function(readline, print, putstr) {
  console.time('init')

  function solve1 (input) {
    let map = [];
    // Mapeia todos os elementos e suas posicoes
    for(let i=0; i<input.length; i++) {
      map[input[i]] = i;
    }

    // Procura por substrings que coincidam com o mapa de elementos em posicao diferente
    for(let i=0; i<input.length; i++) {
      let string = input[i];
      for(let j = string.length; j>0; j--) {
        if(map[string.substring(0, j)] >= 0 && map[string.substring(0, j)] != i) {
          return 'NO';
        }
      }
      return 'YES';
    }

  }

  let numberOfTestCases = readline()
  for(let i=0; i<numberOfTestCases; i++) {
    let phones = [];
    let totalOfPhones = readline()
    for(let j=0; j<totalOfPhones; j++) {
      phones.push(readline())
    }
    print(solve1(phones))
  }
  console.timeEnd('init')



  // let isPhoneValid = (phone, phonesArray, index) => {
  //   if (!phonesArray) return false
  //   let char = parseInt(phone[index])
  //   if (index == phone.length-1)
  //   {
  //     let posNumber = phonesArray[char]
  //     if (posNumber != null && posNumber.length) return false
  //     phonesArray[char] = false
  //     return true
  //   }
  //   if (phonesArray[char]==null) phonesArray[char] = new Array(10)
  //   return isPhoneValid( phone,phonesArray[char], index+1)
  // }

  // let numberOfTestCases = readline()
  // let qtdList = null
  // let qtdTested = 0
  // let phones = new Array(10)
  // let isListValid = true
  // let line = ''

  // while (line = readline()) {
  //   if (qtdList === null){
  //     qtdList = parseInt(line)
  //     continue
  //   }

  //   if (isListValid) {
  //     isListValid = isPhoneValid(line, phones, 0)
  //   }

  //   qtdTested++
  //   if (qtdList == qtdTested) {
  //     print(isListValid ? "YES" : "NO")
  //     phones = new Array(10)
  //     isListValid = true
  //     qtdTested = 0
  //     qtdList = null
  //   }
  // }
};
