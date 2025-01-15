// Promise.All in js

function importantAction(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Subscribe to ${userName}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 1000);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 1000);
  });
}
// loop through each promises and resolve them and if any error reject them
Promise.allPolyFill = (promises) => {
return new Promise((resolve,reject)=>{
  
})
};
Promise.allPolyFill([
  importantAction("youtube channel"),
  likeTheVideo("JS interview Questions"),
  shareTheVideo("JS interview Questions"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
