import { Defaults, TableExport } from 'tableexport';
type ExportType = 'csv' | 'txt' | 'xlsx';
export default (elTable: ELTable, type: ExportType, filename?: string, options?: Defaults) => {
  const selectionIndexs = elTable.getSelectionIndexs();
  const ignoreRows = [] as number[];
  if (selectionIndexs.length) {
    for (let i = 0, dataLength = elTable.data.length; i < dataLength; i++) {
      if (!selectionIndexs.includes(i)) {
        ignoreRows.push(i);
      }
    }
  }
  const table = new TableExport(elTable.$el as Node, Object.assign({ exportButtons: false, ignoreRows }, options));
  //@ts-ignore
  const tableData = (table.getExportData() as Record<string, any>)[TableExport.prototype.defaultNamespace + '1'][type];
  //@ts-ignore
  table.export2file(
    tableData.data,
    tableData.mimeType,
    filename ?? tableData.filename,
    tableData.fileExtension,
    tableData.merges,
    tableData.RTL,
    tableData.sheetname,
  );
};
