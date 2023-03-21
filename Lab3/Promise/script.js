function myPromise(url){
    fetch(url)
    .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        //#region bootsrtap
        // let table = document.createElement("table");
        // table.classList.add("table", "table-striped", "table-bordered");

        // let header = table.createTHead();
        // let headerRow = header.insertRow();
        // let columns = Object.keys(data[0]);

        // columns.forEach(column => {
        // let headerCell = headerRow.insertCell();
        // headerCell.classList.add("bg-primary", "text-white");
        // headerCell.innerHTML = column;
        // });

        // let body = table.createTBody();

        // data.forEach(item => {
        // let row = body.insertRow();

        // columns.forEach(column => {
        //     let cell = row.insertCell();
        //     cell.innerHTML = JSON.stringify(item[column]);
        // });
        // });

        // document.body.appendChild(table);
        //#endregion
        //#region css
        let table = document.createElement("table");
        table.style.borderCollapse = "collapse";
        // table.classList.add("table");

        table.style.width = "100%";
        table.style.textAlign = "left";
        let header = table.createTHead();
        let headerRow = header.insertRow();
        headerRow.style.backgroundColor = "#ddd";
        let columns = Object.keys(data[0]);
    
        columns.forEach(column => {
          let headerCell = headerRow.insertCell();
        //   headerCell.classList.add("th");
          headerCell.style.border = "1px solid #000";
          headerCell.style.padding = "8px";
          headerCell.innerHTML = column;
        });
    
        let body = table.createTBody();
    
        data.forEach(item => {
          let row = body.insertRow();
          row.style.backgroundColor = "#f2f2f2";
          columns.forEach(column => {
            let cell = row.insertCell();
            // cell.classList.add("td");
            cell.style.border = "1px solid #000";
            cell.style.padding = "8px";
            cell.innerHTML = JSON.stringify(item[column]);
            // cell.innerHTML = item[column];
          });
        });
    
        document.body.appendChild(table);
        //#endregion
    })
    .catch((error)=>{
        console.error("There was a problem with the fetch operation:", error);
    });
}

//calling
myPromise("https://jsonplaceholder.typicode.com/users")