console.log('module working')

async function start() {
   return  await Promise.resolve('async wo !')
}

start().then(console.log)
