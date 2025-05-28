// js/script.js
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig.js'; // Importa la instancia de Firestore

document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('miFormulario');
  const listaDatos = document.getElementById('listaDeDatos');

  if (formulario) {
    formulario.addEventListener('submit', async (event) => {
      event.preventDefault();
      const nombreInput = document.getElementById('nombre');
      const valorInput = document.getElementById('valor');

      if (nombreInput && valorInput) {
        try {
          const docRef = await addDoc(collection(db, 'miColeccion'), {
            nombre: nombreInput.value,
            valor: valorInput.value
          });
          console.log('Document written with ID: ', docRef.id);
          nombreInput.value = '';
          valorInput.value = '';
          obtenerDatos(); // Recargar la lista después de agregar
        } catch (error) {
          console.error('Error adding document: ', error);
        }
      }
    });
  }

  async function obtenerDatos() {
    if (listaDatos) {
      listaDatos.innerHTML = ''; // Limpiar la lista antes de recargar
      try {
        const querySnapshot = await getDocs(collection(db, 'miColeccion'));
        querySnapshot.forEach((doc) => {
          const li = document.createElement('li');
          li.textContent = `ID: ${doc.id}, Nombre: ${doc.data().nombre}, Valor: ${doc.data().valor}`;
          listaDatos.appendChild(li);
        });
      } catch (error) {
        console.error('Error getting documents: ', error);
        listaDatos.innerHTML = '<p>Error al cargar los datos.</p>';
      }
    }
  }

  // Cargar los datos iniciales al cargar la página
  obtenerDatos();
});