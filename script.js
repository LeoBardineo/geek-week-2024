const title = document.querySelector('.box-mobile > .upper > .about')
const sectionMobile = document.querySelector('.box-mobile > .content')

document.getElementById('sobre-evento').addEventListener("click", () => {
    title.innerText = 'Sobre o evento:'
    sectionMobile.innerHTML = `
    <p>
        A Geek Week UFRJ 2024 é um evento voltado para o público nerd universitário, onde serão
        oferecidas palestras sobre os campos teórico, social e prático de literatura infanto-juvenil,
        fanfics e narrativas digitais.
    </p>
    <p><br></p>
    <p>
        Os núcleos NEPF, NUPLIJ e NuPNE se uniram para trazer à vocês palestras de qualidade e com
        palestrantes preparados para debater os mais variados assuntos da cultura pop.
    </p>
    `
})