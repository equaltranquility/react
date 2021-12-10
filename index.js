fetch('/pizza-items-db.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
