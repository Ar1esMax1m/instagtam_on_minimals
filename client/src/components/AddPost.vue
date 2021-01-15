<template>
  <v-form @submit.prevent="onSubmit" id="form">
    <v-file-input type="file" name="file" placeholder="Файл" />
    <v-text-field filled type="text" name="description" placeholder="Описание"/>
    <v-btn type="submit" color="success" elevation="2">Добавить</v-btn>
  </v-form>
</template>

<script>
import AddPostService from '@/services/AddPostService';

export default {
  methods: {
    async onSubmit() {
      let form = document.getElementById('form');
      let formData = new FormData(form);

      try{
        await AddPostService.addPost(formData);
      } catch(e){
        if(e.response.status === 400){
          console.error('Error - повторите попытку')
        }
      }
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