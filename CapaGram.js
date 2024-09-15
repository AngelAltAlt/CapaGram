//Required Custom Extensions//
import * from "./ext/CapaGram-Basic.js"
import * from "./ext/Console-Basic.js"

//Required Script Extensions//
function unlock(x){
  if (x == true){
    return 0
  } else {
    errorc("This has not been unlocked")
  }
}

//Scripts//

export function start(){
  let Unlocked = true
  printc("Starting CapaGram...")
}

export function store(x){
  unlock(Unlocked)
  let storedVal = x
  printc("The value has been stored!")
}

export function splitCap(x){
  unlock(Unlocked)
  printc("Spliting the value...")
  if (storedVal == storedVal.join('')){
    let storedVal = storedVal.split('')
    printc("Value splitted!")
  } else {
    printc("Value is already splitted, the value will not be effected")
  }
}

export function discharge(){
  unlock(Unlocked)
  if (storedVal != ''){
    let goneVal = storedVal
    let storedVal = ''
    printc("Value has been eleminated from the capacitor!")
  } else {
    printc("There is no stored value, hence the value will not be affected")
  }
}

export function returnVal(){
  unlock(Unlocked)
  let storedVal = goneVal
  let goneVal = ''
  printc("The value is back to the capacitor!")
}

export function valOut(){
  unlock(Unlocked)
  valOutBasic()
}

//More comming soon...
