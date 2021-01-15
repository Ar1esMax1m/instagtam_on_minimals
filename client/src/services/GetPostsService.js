class GetPostsService {
  static getPosts() {
    return new Promise((resolve, reject) => {
      fetch("/getPost", {
        method: "GET",
      })
        .then((response) => {
          response.json().then((posts) => {
            resolve(posts)
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default GetPostsService;
