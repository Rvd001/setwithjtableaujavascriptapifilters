

function initializeViz(){
    var vizDiv = document.getElementById("tableauViz");
  //#http://public.tableau.com/views/padawan/SuperStoreJSAPI101
    // var vizUrl = "https://public.tableau.com/views/testforsetnormalDashboard/BainwithSSD?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    // var vizUrl = "https://public.tableau.com/views/testforsetnormalDashboard/Dashboard1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var vizUrl = "https://public.tableau.com/views/testingdashboardVersion2_16069950242490/Dashboard1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
    var vizOptions = {};

    viz = new tableauSoftware.Viz(vizDiv, vizUrl, vizOptions);    

  };

function vizFilter(filterName,filterValue,filterType){
  //getActiveSheet() can be a dashboard or a worksheet
  sheet=viz.getWorkbook().getActiveSheet();


if(sheet.getSheetType() === 'worksheet'){
sheet.applyFilterAsync(filterName,filterValue,filterType);
}
else{
  // console.log('I nor dey work o')
worksheetArray = sheet.getWorksheets();
for(var i =0; i < worksheetArray.length; i++)
{
worksheetArray[i].applyFilterAsync(filterName,filterValue,filterType);
console.log(worksheetArray)
}
}
};


