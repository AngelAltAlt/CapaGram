//Required Custom Extensions//
import * from "./ext/CapaGram-Basic.js"
import * from "./ext/Console-Basic.js"

//Required Script Extensions//
function unlock(x){
  if (x == true){
    return 0
  } else {
    error("This has not been unlocked")
  }
}

//Scripts//

export function start(){
  let Unlocked = true
  print("Starting CapaGram...")
}

export function store(x){
  unlock(Unlocked)
  let storedVal = x
  print("The value has been stored!")
}

export function splitCap(x){
  unlock(Unlocked)
  print("Spliting the value...")
  if (storedVal == storedVal.join('')){
    let storedVal = storedVal.split('')
    print("Value splitted!")
  } else {
    print("Value is already splitted, the value will not be effected")
  }
}

export function discharge(){
  if (storedVal != ''){
    let goneVal = storedVal
    let storedVal = ''
    print("Value has been eleminated from the capacitor!")
  } else {
    print("There is no stored value, hence the value will not be affected")
  }
}

export function returnVal(){
  let storedVal = goneVal
  let goneVal = ''
  print("The value is back to the capacitor!")
} 

//More comming soon...
