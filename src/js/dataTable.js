import $ from 'jquery';
import * as jszip from 'jszip';
import DataTable from 'datatables.net-bs5';
import 'datatables.net-buttons-bs5';
import 'datatables.net-buttons/js/buttons.html5.mjs';
import 'datatables.net-searchbuilder-bs5';
import 'datatables.net-searchpanes-bs5';


$.fn.dataTable.Buttons.jszip(jszip);


export const buildDataTable = (selector, opts) => new DataTable(
  selector, {
    responsive: true,
    ordering: true,
    buttons: [
      { extend: 'csvHtml5',   className: 'mr-2' },
      { extend: 'excelHtml5', className: 'ml-2 btn-info' },
    ],
    dom: `
      <'d-flex flex-row bd-highlight mb-2 align-items-center'
        <'mb-2 bd-highlight ms-auto' >
        <'export-btn-label mx-2'>
        B
      >
      <'row'
        <'col-sm-6 col-md-6'l>
        <'col-sm-12 col-md-6'f>
      >
      <'row'
        <'col-sm-12'tr>
      >
      <'row'
        <'col-sm-12 col-md-5'i>
        <'col-sm-12 col-md-7'p>
      >
    `,
    ...opts
  })
;

