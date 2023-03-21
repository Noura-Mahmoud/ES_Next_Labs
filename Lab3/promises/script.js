function myPromise(url){
    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        createTable(data)
    })
    .catch((error)=>{
        console.log(error);
    });
}

function createTable(tableData) {
    //create a Table Object
    let table = document.createElement('table');
    table.className ="table table-bordered border-primary table-hover table-striped-colums ";
    table.insertRow();
    //Iterate over every header in the array
    head = Object.keys(tableData[0])
    for( key in head)
    {
        let newCell = table.rows[table.rows.length - 1].insertCell();
        newCell.className="table-primary"
        //add text to the created cell element
        newCell.textContent = head[key];

    }
    //iterate over every array(row) within tableArr
    for (let row of tableData) {
    //Insert a new row element into the table element
    table.insertRow();

    for( key in row)
    {
        let newCell = table.rows[table.rows.length - 1].insertCell();
        //add text to the created cell element
        if(typeof row[key] != "object")
            newCell.textContent = row[key];
        else
            newCell.textContent = JSON.stringify(row[key]);

    }
    }//append the compiled table to the DOM
    document.body.appendChild(table);
  }
//calling
myPromise("https://jsonplaceholder.typicode.com/users")