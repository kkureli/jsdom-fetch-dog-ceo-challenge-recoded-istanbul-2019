document.addEventListener("DOMContentLoaded", () => {

        fetch("https://dog.ceo/api/breeds/image/random/4")
            .then(resp => resp.json())
            .then(json => {
                const dogImageContainer = document.getElementById("dog-image-container")
                json["message"].forEach(element => {
                    let img = document.createElement("img")
                    img.src = element
                    dogImageContainer.appendChild(img)
                });
            })

        fetch("https://dog.ceo/api/breeds/list/all")
            .then(resp => resp.json())
            .then(json => {
                // const str = JSON.stringify(json["message"]);
                const j = json["message"]
                    // j.forEach(element => {
                    //     console.log(element);

                // });

                // for (const [key, value] in j) {
                //     if (j.hasOwnProperty(key)) {
                //         const element = j[key, value];
                //         console.log(element);


                //     }
                // }
                const dogBreedsUl = document.getElementById("dog-breeds")

                function getRandomColor() {
                    var letters = '0123456789ABCDEF';
                    var color = '#';
                    for (var i = 0; i < 6; i++) {
                        color += letters[Math.floor(Math.random() * 16)];
                    }
                    return color;
                }
                for (const [key, value] of Object.entries(json["message"])) {
                    {
                        let breeds = `${key}: ${value}`;
                        // console.log(breeds);

                        let li = document.createElement("li")
                        let p = document.createElement("p")
                        p.textContent = breeds
                        li.appendChild(p)
                        const dogBreedsUl = document.getElementById("dog-breeds")
                        dogBreedsUl.appendChild(li)
                        li.addEventListener("click", function() {
                            li.style.color = getRandomColor()
                        })
                    }

                }
                dropdownListener()



                function dropdownListener() {
                    const dropDown = document.getElementById("breed-dropdown");

                    let lis = document.querySelectorAll("ul li p")


                    dropDown.addEventListener("change", function() {
                        if (dropDown.value == "a") {
                            lis.forEach(element => {
                                if (element.textContent[0] != "a") {
                                    element.parentNode.style.display = "none"
                                } else { element.parentNode.style.display = "block" }

                            });
                        } else if (dropDown.value == "b") {
                            lis.forEach(element => {
                                if (element.textContent[0] != "b") {
                                    element.parentNode.style.display = "none"
                                } else { element.parentNode.style.display = "block" }
                            });
                        } else if (dropDown.value == "c") {
                            lis.forEach(element => {
                                if (element.textContent[0] != "c") {
                                    element.parentNode.style.display = "none"
                                } else { element.parentNode.style.display = "block" }
                            });
                        } else if (dropDown.value == "d") {
                            lis.forEach(element => {
                                if (element.textContent[0] != "d") {
                                    element.parentNode.style.display = "none"
                                } else { element.parentNode.style.display = "block" }
                            });
                        }
                    })
                }


            })



        // for (const iterator of json["message"]) {

        // 
    }



    // json["message"].forEach(element => {
    //     console.log(element);


);