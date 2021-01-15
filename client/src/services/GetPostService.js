class GetPostService {
  static getPost(propsId) {
    let id = propsId;
    return new Promise((resolve, reject) => {
      fetch(`/post/${id}`, {
        method: "GET",
      })
        .then((response) => {
          response.json().then((post) => resolve(post));
        })
        .catch((error) => reject(error));
    });
  }
}

export default GetPostService;