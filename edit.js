const name = "V"
if(name){
  try {
    console.log(name)
  } catch (err) {
    console.error(err);
    (err)
  }
}

const getData = () => {
  const data = fetch('https://github.com').then(res => console.log("Success")).catch(err => console.log("Error"))
}

getData();
