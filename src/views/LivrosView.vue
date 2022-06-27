<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      livros: [
        {
          livroid: "7313422d-7fa3-403f-aa3c-a14d3196991b",
          nome: "The witcher",
          editoraid: "8ecb8a1e-5114-496d-9bee-1308dccf4b87",
          autor: "Andrzej Sapkowski",
          cartegoria_id: "Drama",
        },
        {
          novo_editora: "",
          livroid: "736c8f35-b5cf-43bf-a9ee-e4d8950ee0a5",
          nome: "Grimório das Bruxas",
          editoraid: "597ceef8-36ac-4b0e-859e-77551c9818c0	",
          autor: "RONALD HUTTON",
          cartegoria_id: "Medo",
        },
        {
          livroid: "519d6a87-60c2-465a-aa2f-1b8d0ef079cf",
          nome: "O pequeno príncipe",
          editoraid: "630c1d03-cb59-460a-89b8-cca1d42c1bc6",
          autor: "Antoine de Saint-Exupéry",
          cartegoria_id: "Ficção",
        },
      ],
      novo_livro: "",
    };
  },
  methods: {
    salvar() {
      const novo_idlivro = uuidv4();
      const novo_ideditora = uuidv4();
      this.livros.push({
        livroid: novo_idlivro,
        editoraid: novo_ideditora,
        nome: this.novo_livro,
      });
      this.novo_livro = "";
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
      <input type="text" placeholder="Id do editora" class="input-menor" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-editoras">
      <table>
        <thead>
          <tr>
            <th>ID-livro</th>
            <th>Nome</th>
            <th>Autor</th>
            <th>Cartegoria</th>
            <th>Editora-Id</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>
              {{ livro.livroid }}
            </td>
            <td>
              {{ livro.nome }}
            </td>
            <td>
              {{ livro.autor }}
            </td>
            <td>
              {{ livro.cartegoria_id }}
            </td>
            <td>
              {{ livro.editoraid }}
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
