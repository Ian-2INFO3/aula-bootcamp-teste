<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      autores: [
        {
          id_autor: "4b95ec3f-c3a0-49d9-971d-b3696657fbbd",
          nome: "Andrzej Sapkowski",
        },
        {
          id_autor: "ec38e964-9ddc-4d39-b6e3-688e239f8da9",
          nome: "RONALD HUTTON",
        },
        {
          id_autor: "d48aca58-0c61-46fc-896f-9ea630a90cfb",
          nome: "Antoine de Saint-Exupéry",
        },
      ],
      novo_autor: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_autor !== "") {
        const novo_id_autor = uuidv4();
        this.autores.push({
          id_autor: novo_id_autor,
          nome: this.novo_autor,
        });
        this.novo_autor = "";
      }
    },
    excluir(autor) {
      const indice = this.autores.indexOf(autor);
      this.autores.splice(indice, 1);
    },
    editar(autor) {
      const novo_nome = prompt("Editar Nome do autor");
      if (novo_nome !== "") {
        autor.nome = novo_nome;
      }
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de autores</h2>
    </div>
    <div class="form-input">
      <input
        @keyup.enter="salvar"
        v-model="novo_autor"
        type="text"
        placeholder="Nome do autor"
        class="input-maior"
      />

      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-editoras">
      <table>
        <thead>
          <tr>
            <th>ID-autor</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="autor in autores" :key="autor.id">
            <td>
              {{ autor.id_autor }}
            </td>
            <td>
              {{ autor.nome }}
            </td>
            <td>
              <button @click="editar(autor)">Editar</button>
              <button @click="excluir(autor)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
