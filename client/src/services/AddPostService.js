class AddPostService{
  static addPost(formData){
    return new Promise((resolve, reject) =>{
      fetch("/addPost", {
        method: "POST",
        body: formData,
      })
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    })
  }
}

export default AddPostService;