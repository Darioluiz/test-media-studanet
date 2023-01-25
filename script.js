const studantName = prompt('Diga o nome do Aluno')
let noteOne = prompt(`Qual foi  a primera nota do ${studantName}?`)
let noteTwo = prompt(`Qual foi a segunda nota do ${studantName}?`)
let noteThree = prompt(`Qual foi a terceira noda do ${studantName}?`)

const noteMedia = (Number(noteOne) + Number(noteTwo) + Number(noteThree)) / 3

if (noteMedia >= 5) {
  alert(`Parabéns ${studantName}, voçê foi aprovado para o proxímo bimestre`)
} else {
  alert(
    `${studantName}, infelizmente você não atingiu a média, mas não desista! Terá uma prova de recuperação, estude mais.`
  )
}
