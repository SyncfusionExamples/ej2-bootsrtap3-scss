ej.base.enableRipple(window.ripple)

var refresh;
var grid = new ej.grids.Grid({
    dataSource: window.inventoryData,
    allowPaging: true,
    allowSorting: true,
    allowGrouping: true,
    groupSettings: { columns: ['Country'] },
    height: 300,
    columns: [
        { field: 'Inventor', headerText: 'Inventor Name', width: 160 },
        { field: 'NumberofPatentFamilies', headerText: 'No of Patent Families', width: 195, textAlign: 'Right' },
        { field: 'Country', headerText: 'Country', width: 120 },
        { field: 'Active', headerText: 'Active', width: 120 },
        { field: 'Mainfieldsofinvention', headerText: 'Main fields of invention', width: 200 },
    ],
    pageSettings: { pageCount: 5 },
    load: function() {
        refresh = grid.refreshing;
    },
    dataBound: function() {
        if (refresh) {
            grid.groupColumn('Country');
            refresh = false;
        }
    },
});
grid.appendTo('#Grid');


var calendar = new ej.calendars.Calendar();
calendar.appendTo('#calendar');

var button = new ej.buttons.Button({ isPrimary: true });
button.appendTo('#primarybtn');

button = new ej.buttons.Button({});
button.appendTo('#normalbtn');

button = new ej.buttons.Button({ cssClass: 'e-outline', isPrimary: true });
button.appendTo('#outlinebtn');

button = new ej.buttons.Button({ cssClass: 'e-flat e-primary' });
button.appendTo('#flatbtn');

button = new ej.buttons.Button({ cssClass: 'e-success'  });
button.appendTo('#successbtn');

button = new ej.buttons.Button({ cssClass: 'e-warning' });
button.appendTo('#warningbtn');

button = new ej.buttons.Button({ cssClass: 'e-danger' });
button.appendTo('#dangerbtn');

button = new ej.buttons.Button({ cssClass: 'e-info' });
button.appendTo('#infobtn');

button = new ej.buttons.Button({ iconCss: 'e-icons e-add-icon', cssClass: 'e-small e-round', isPrimary: true });
button.appendTo('#roundbtn');

var toggleBtn = new ej.buttons.Button({ iconCss: 'e-icons e-play-icon', cssClass: 'e-flat e-primary', isToggle: true });
toggleBtn.appendTo('#togglebtn');

button = new ej.buttons.Button({ iconCss: 'e-icons e-open-icon', cssClass: 'e-flat e-primary', iconPosition: 'Right' });
button.appendTo('#openiconbtn');

button = new ej.buttons.Button({ cssClass: 'e-small'});
button.appendTo('#smallbtn');

//Toggle button click event handler
toggleBtn.element.onclick = function () {
   if (toggleBtn.element.classList.contains('e-active')) {
       toggleBtn.content = 'Pause';
       toggleBtn.iconCss = 'e-icons e-pause-icon';
   } else {
       toggleBtn.content = 'Play';
       toggleBtn.iconCss = 'e-icons e-play-icon';
   }
};  
