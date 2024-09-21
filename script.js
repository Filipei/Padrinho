function mostraralerta(){
    Swal.fire({
        title: "Ficamos muito felizes que você aceitou, Gustavo! Será uma honra tê-lo como nosso padrinho.",
        icon: "success",
        customClass: {
            popup: 'popupclass',
            title: 'titleclass',
            icon:'iconclass',
            confirmButton: 'confirmclass',
        }
      });   
}

const nao = document.getElementById('naobutton');

        document.addEventListener('mousemove', (e) => {
            const buttonRect = nao.getBoundingClientRect();
            const distance = Math.sqrt(
                Math.pow(e.clientX - (buttonRect.left + buttonRect.width / 2), 2) +
                Math.pow(e.clientY - (buttonRect.top + buttonRect.height / 2), 2)
            );

            if (distance < 40) {
                const newX = Math.random() * (buttonRect.width);
                const newY = Math.random() * (window.innerHeight - buttonRect.height);
                nao.style.transform = `translate(${newX}px, ${newY}px)`;
            }
        });

function mostraralertanao(){
    Swal.fire({
        title: "Ta maluco misera? Aperte o outro logo",
        icon: "error",
        customClass: {
            popup: 'popupclass',
            title: 'titleclass',
            icon:'iconclass',
            confirmButton: 'confirmclass',
        }
      });   
}