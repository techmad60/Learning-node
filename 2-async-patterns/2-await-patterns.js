const {readFile, writeFile} = require('fs')
// const util = require ('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)




const start = async() => {
  try {
    const first = await readFile('./content/subfolder/first.txt', 'utf-8');
    const second = await readFile('./content/subfolder/second.txt', 'utf-8');
    await writeFile('./content/subfolder/result-mind-grenade.txt', `THIS IS AWESOME: ${first} ${second}`)
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
  
}

start()

// const getText = (path) => {
//   return new Promise((resolve, reject)=> {
//     readFile( path, 'utf8', (err, data)=> {
//       if(err) {
//         reject(err);
//       }
//       else {
//         resolve(data);
//       }
//     })
//   })
// }

// getText('./content/subfolder/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))