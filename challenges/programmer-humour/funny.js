const container = document.querySelector(".img-container");

fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => {
    if (response.ok) {
   return   response.json()
    } else {
      throw Error(` ${response.statusText}`);
    }
  })
  .then((data) => {
    container.innerHTML = `<img src="${data.img}" >`;
    console.log(data);
  })
  .catch(error=> console.log(error))
  
