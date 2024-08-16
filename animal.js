const animalsDabba = [
    {
      name: "hyena",
      image:
        "https://media.istockphoto.com/id/603177326/vector/cartoon-smiling-hyena.jpg?s=612x612&w=0&k=20&c=DDys1EnCbQ3DxukPYRh0AX15V7wK3pFNfKK94xQ32qU=",
    },
    {
      name: "rabbit",
      image:
        "https://cdn.dribbble.com/userupload/10816684/file/original-5c570283785e5cfcf18fd1014b551172.png?resize=400x300&vertical=center",
    },
    {
      name: "panther",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb7CpeIbhiw-P9jW9puespubBK1g-zMXBJKg&s",
    },
  ];
  
  function getRandomAnimal() {
    const ourPick = Math.floor(Math.random() * animalsDabba.length);
    return animalsDabba[ourPick];
    // array dabba
  }
  
  function displayAnimal() {
    const randomAnimal = getRandomAnimal();



    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p> ${randomAnimal.name}</p> <img src="${randomAnimal.image}">`;
  }
  
  // document.getElementById("submit").addEventListener("click", displayAnimal);
