<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      livros: [
        {
          id_livro: "7313422d-7fa3-403f-aa3c-a14d3196991b",
          nome: "The witcher",
          id_editora: "8ecb8a1e-5114-496d-9bee-1308dccf4b87",
          id_autor: "4b95ec3f-c3a0-49d9-971d-b3696657fbbd",
          id_cartegoria: "16390338-fb77-4e4c-84f9-da9d1a1bdee7",
        },
        {
          id_livro: "736c8f35-b5cf-43bf-a9ee-e4d8950ee0a5",
          nome: "Grimório das Bruxas",
          id_editora: "597ceef8-36ac-4b0e-859e-77551c9818c0	",
          id_autor: "ec38e964-9ddc-4d39-b6e3-688e239f8da9",
          id_cartegoria: "933f3ba7-0a49-4e63-80c3-134600987018",
        },
        {
          id_livro: "519d6a87-60c2-465a-aa2f-1b8d0ef079cf",
          nome: "O pequeno príncipe",
          id_editora: "630c1d03-cb59-460a-89b8-cca1d42c1bc6",
          id_autor: "d48aca58-0c61-46fc-896f-9ea630a90cfb",
          id_cartegoria: "ed4a44b6-720b-4b7b-a4fa-a2ff27ec3d17",
        },
      ],
      novo_livro: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_livro !== "") {
        const novo_idlivro = uuidv4();
        const novo_ideditora = uuidv4();
        const novo_idautor = uuidv4();
        const novo_idcartegoria = uuidv4();
        this.livros.push({
          id_livro: novo_idlivro,
          id_editora: novo_ideditora,
          nome: this.novo_livro,
          id_autor: novo_idautor,
          id_cartegoria: novo_idcartegoria,
        });
        this.novo_livro = "";
      }
    },
    excluir(livro) {
      const indice = this.livros.indexOf(livro);
      this.livros.splice(indice, 1);
    },
    editar(livro) {
      const novo_nome = prompt("Editar Nome do livro");
      if (novo_nome !== "") {
        livro.nome = novo_nome;
      }
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de livros</h2>
    </div>
    <div class="form-input">
      <input
        @keyup.enter="salvar"
        v-model="novo_livro"
        type="text"
        placeholder="Nome do livro"
        class="input-maior"
      />

      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-editoras">
      <table>
        <thead>
          <tr>
            <th>ID-livro</th>
            <th>Nome</th>
            <th>Autor-id</th>
            <th>Cartegoria-id</th>
            <th>Editora-Id</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>
              {{ livro.id_livro }}
            </td>
            <td>
              {{ livro.nome }}
            </td>
            <td>
              {{ livro.id_autor }}
            </td>
            <td>
              {{ livro.id_cartegoria }}
            </td>
            <td>
              {{ livro.id_editora }}
            </td>
            <td>
              <button @click="editar(livro)">Editar</button>
              <button @click="excluir(livro)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
