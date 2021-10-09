var hora = 25
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else if (hora > 18 && hora <= 23) {
    console.log('Boa Noite!')
} else if (hora > 23 && hora <= 24) {
    console.log('Vá dormir, é muito tarde!')
} else {
    console.log('ERRO: Hora deve estar entre 0 e 24 horas')
}