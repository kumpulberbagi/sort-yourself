'use strict'

function bubbleSort(items) {





}


// Driver code
function main() {

  sort_from_file('test_random_wordlist.txt')
  sort_from_file('test_reversed_wordlist.txt')

  //Aktifkan 3 Baris dibawah ini untuk mengaktifkan proses selection sort untuk data lebih besar

  // sort_from_file('random_wordlist.txt')//Menjalankan Fungsi sort_from_file() dengan data param random_wordlist.txt
  // sort_from_file('reversed_wordlist.txt')//Menjalankan Fungsi sort_from_file() dengan data param reversed_wordlist.txt
  // sort_from_file('sorted_wordlist.txt')//Menjalankan Fungsi sort_from_file() dengan data param sort_from_file.txt

}

function sort_from_file(filename) {
  let fs = require('fs')

  fs.readFile(filename, (err, data) => {

    if (err)
      return console.log(err)

    let items = data.toString()
      .split("\r\n")

    console.log(filename)
    console.log("--------")
    console.log(bubbleSort2(items))

  })
}

main()
