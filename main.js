       function deselect(){
           gridOptions.api.deselectAll()
       }

       // Grid Options are properties passed to the grid
       const gridOptions = {

         // each entry here represents one column
         columnDefs: [
           { field: "accessibility" },
           { field: "activity" },
          //  { field: "key" },
           { field: "link" },
           { field: "participants" },
           { field: "type" },
         ],

         // default col def properties get applied to all columns
         defaultColDef: {sortable: true, filter: true},

         rowSelection: 'multiple', // allow rows to be selected
         animateRows: true, // have rows animate to new positions when sorted

         // example event handler
         onCellClicked: params => {
           console.log('cell was clicked', params)
         }
       };

       // get div to host the grid
       const eGridDiv = document.getElementById("myGrid");
       // new grid instance, passing in the hosting DIV and Grid Options
       new agGrid.Grid(eGridDiv, gridOptions);
       
       // Fetch data from server
       let notarr = [
         {
           accessibility: 0.1,
           activity: "Go stargazing",
           key: "8832605",
           link: "",
           participants: 1,
           price: 0,
           type: "relaxation",
         },
         {
           accessibility: 0.8,
           activity: "Learn GraphQL",
           key: "2167064",
           link: "https://graphql.org/",
           participants: 1,
           price: 0,
           type: "education",
         },
       ];
       function autoSizeAll(skipHeader) {
        const allColumnIds = [];
        gridOptions.columnApi.getColumns().forEach((column) => {
          allColumnIds.push(column.getId());
        });
      
        gridOptions.columnApi.autoSizeColumns(allColumnIds, skipHeader);
      }
       

       fetchApi(20).then(data=>{gridOptions.api.setRowData(data);autoSizeAll(false)})