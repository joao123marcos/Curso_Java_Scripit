const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avalicao2 = 6.971

const total = avaliacao1 * peso1 + avalicao2 * peso2
const media = total/(peso1 + peso2)

console.log(media)
