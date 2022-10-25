const b_text = document.querySelector('.bittu-text p');
b_text.innerHTML = b_text.innerText.split("").map((ele, i) =>
    `<span style="transform:rotate(${i*9}deg)">${ele}</span>`
).join("");