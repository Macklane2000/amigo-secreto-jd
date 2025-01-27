/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás 
desarrollar la lógica para resolver el problema. */

// Lista para almacenar los amigos
const amigos = [];

// Función para adicionar un amigo
function agregarAmigo() {
    const input = document.getElementById('amigo'); // método que se utiliza para seleccionar un elemento HTML por su atributo id
    const lista = document.getElementById('listaAmigos');
    const nombre = input.value.trim(); // Obtener el valor de un campo de entrada y limpiar espacios en blanco

    if (!nombre) {
        alert('Por favor, ingresa un nombre válido.'); // Validar que el campo no esté vacío
        return;
    }

    amigos.push(nombre); // Agrega el nombre al array

            const item = document.createElement('li'); // Crea un nuevo elemento de lista
            item.textContent = amigos; // Asigna el nombre al elemento
            lista.appendChild(item); // Agrega el elemento a la lista visible

            input.value = ''; // Limpia el campo de entrada
            input.focus(); // Coloca el cursor de nuevo en el campo de entrada
        }

        // Función para sortear un amigo
        function sortearAmigo() {
            const resultado = document.getElementById('resultado'); // Obtener el resultao del sorteo

            if (amigos.length === 0) {
                alert('La lista está vacía. Por favor, agrega nombres primero.'); // Verifica si hay elementos en el array amigos
                return;
            }

            const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera un índice aleatorio
            const amigoSecreto = amigos[indiceAleatorio]; // Obtiene el nombre correspondiente

            resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`; // Muestra el resultado
        }