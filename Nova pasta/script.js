let color = true;

function bg_light() {
    color = !color;

    if (color) {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = '#0E1116';

        let bg_change = document.querySelectorAll('.detalhe-social-media i');
        bg_change.forEach(a => {
            a.style.backgroundColor= '#0E1116';
            a.style.color= 'white'
        });

        let color_change = document.querySelectorAll('aside h4');
        color_change.forEach(h4 => {
            h4.style.color = '#0E1116';
        });
        // pega o elemento pelo id
        const p = document.getElementById('resposta');

        // muda o texto para "não"
        p.textContent = 'Claro';


    } else {
        document.body.style.backgroundColor = '#0E1116';
        document.body.style.color = 'white';

        let bg_change = document.querySelectorAll(' .detalhe-social-media i');
        bg_change.forEach(a => {
            a.style.backgroundColor = 'white';
            a.style.color ='#0E1116';
        });

        let color_change = document.querySelectorAll('aside h4');
        color_change.forEach(h4 => {
            h4.style.color = 'white';
        });
        // pega o elemento pelo id
const p = document.getElementById('resposta');

// muda o texto para "não"
p.textContent = 'Escuro';

    }
}
