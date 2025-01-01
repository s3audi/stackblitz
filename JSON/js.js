

    let veri = document.getElementById("veri");

    fetch("testler/slider/index.html")
        .then(response => response.text())
        .then(data => {
            veri.innerHTML += data;
            return fetch("if2.html");
        })
        .then(response => response.text())
        .then(data => {
            veri.innerHTML += `<div style="width: 100%;">${data}</div>`;
            return fetch("if3.html");
        })
        .then(response => response.text())
        .then(data => {
            veri.innerHTML += `<div style="width: 100%;">${data}</div>`;
            return fetch("if4.html");
        })
        .then(response => response.text())
        .then(data => veri.innerHTML += `<div style="width: 100%;">${data}</div>`);
