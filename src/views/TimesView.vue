<script>
export default {
  data() {
    return {
      times: [
        { id: 1, nome: "Time 1" },
        { id: 2, nome: "Time 2" },
        { id: 3, nome: "Time 3" },
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Times</h2>
    </div>
    <div class="form-input">
      <input type="text" />
      <button>Salvar</button>
    </div>
    <div class="list-times">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="time in times" :key="time.id">
            <td>
              {{ time.id }}
            </td>
            <td>
              {{ time.nome }}
            </td>
            <td>??</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
