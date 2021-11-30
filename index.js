function getRemoteData(url, callback) {
  // HANDLING THE HTTP REQUEST WITH "url"
  // ...
  // ...
  // ...
  // ...5mins
  // ...

  // let data = result of HTTP
  if (!err) {
    callback(null, data);
  } else {
    callback(err);
  }
}

getUser("http://whatever.com/user/123998213", function (user) {
  getBlogPosts("http://whatever.com/posts/" + user.id, function (blogPosts) {
    getComments(
      "http://whatever.com/comments/" + blogPosts[0].id,
      function (comments) {
        //DOM MANIPULATION
        // Attaching comments in the page....
        console.log(comments);
      }
    );
  });
});

getUser("http://whatever.com/user/123998213")
  .then(function (user) {
    return getBlogPosts("http://whatever.com/posts/" + user.id);
  })
  .then(function (blogPosts) {
    return getComments("http://whatever.com/comments/" + blogPosts[0].id);
  })
  .then(function (comments) {
    //DOM MANIPULATION
    // Attaching comments in the page....
    console.log(comments);
  })
  .catch(function (err) {
    console.log(err);
  });

// ARROW FUNCTIONS

// console.log(sayHi())
// function sayHi(){
//     return "hello"
// }

//   const sayHi = function () {
//     return "hello";
//   };
// const sayHi2 = () => { return "hello" }
const sayHi = () => "hello";

sayHi();

getUser("http://whatever.com/user/123998213")
  .then(function (user) {
    return getBlogPosts("http://whatever.com/posts/" + user.id);
  })
  .then(function (blogPosts) {
    return getComments("http://whatever.com/comments/" + blogPosts[0].id);
  })
  .then(function (comments) {
    //DOM MANIPULATION
    // Attaching comments in the page....
    console.log(comments);
  })
  .catch(function (err) {
    console.log(err);
  });

getUser("http://whatever.com/user/123998213")
  .then((user) => getBlogPosts("http://whatever.com/posts/" + user.id))
  .then((blogPosts) =>
    getComments("http://whatever.com/comments/" + blogPosts[0].id)
  )
  .then((comments) => {
    //DOM MANIPULATION
    // Attaching comments in the page....
    console.log(comments);
  })
  .catch(function (err) {
    console.log(err);
  });
