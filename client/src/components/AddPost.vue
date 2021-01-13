<template>
  <v-form @submit.prevent="onSubmit" id="form">
    <v-file-input type="file" name="file" placeholder="Файл" />
    <v-text-field filled type="text" name="des" placeholder="Описание"/>
    <v-btn type="submit" color="success" elevation="2">Добавить</v-btn>
  </v-form>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      let form = document.getElementById('form')
      let formData = new FormData(form)

      fetch("/addPost", {
        method: "POST",
        body: formData,
      })
        .then((res) => console.log(res))
        .catch((error) => console.error(error));
    },
  },
};
</script>

<style lang="scss" scoped>
#form{
  display: flex;
  flex-direction: column;
  align-items: center;
  input{
    width: 50%;
  }
}
</style>