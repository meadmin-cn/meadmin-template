let printFrame = null as HTMLIFrameElement | null;
export function getExportBlobByContent(content: string, type = 'text/html') {
  return new Blob([content], { type: `${type};charset=utf-8;` });
}

export function createHtmlPage(content: string, title = '', head: string[] = []): string {
  const headString = head.join(`\n`);
  return [
    '<!DOCTYPE html><html>',
    '<head>',
    '<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui">',
    `<title>${title}</title>`,
    `${headString}`,
    '</head>',
    `<body>${content}</body>`,
    '</html>',
  ].join('');
}

export function createFrame(): HTMLIFrameElement {
  const frame = document.createElement('iframe');
  frame.className = 'me--print-frame';
  frame.style.cssText = 'display:none';
  return frame;
}

function appendPrintFrame() {
  if (printFrame) {
    document.body.appendChild(printFrame);
  }
}

function removePrintFrame() {
  if (printFrame) {
    if (printFrame.parentNode) {
      printFrame.parentNode.removeChild(printFrame);
    }
    printFrame = null;
  }
}
function afterPrintEvent() {
  requestAnimationFrame(removePrintFrame);
}

export function handlePrint(content: string, title = '', head: string[] = [], type = 'text/html'): void {
  content = createHtmlPage(content, title, head);
  const blob = getExportBlobByContent(content, type);
  removePrintFrame();
  printFrame = createFrame();
  printFrame.onload = (evnt: any) => {
    if (evnt.target.src) {
      evnt.target.contentWindow.onafterprint = afterPrintEvent;
      evnt.target.contentWindow.print();
    }
  };
  appendPrintFrame();
  printFrame.src = URL.createObjectURL(blob);
}

export default async (elTable: ELTableInstance, title = '', head: string[] = []) => {
  head.unshift(`<style>
  .el-table{
    width: max-content;
    margin: 0 auto;
  }
  .el-table__header,.el-table__body{
    width:auto !important
  }
  </style>`);
  head.unshift('<style>' + (await import('@/styles/index.scss?inline')).default + '</style>');
  head.unshift(
    '<link rel="stylesheet" href="' +
      window.location.origin +
      (await import('element-plus/dist/index.css?url')).default +
      '"/>',
  );
  const index = elTable.getSelectionIndexs();
  if (index.length) {
    head.push(
      '<style>tbody>tr:not(' +
        index.map((item) => 'tr:nth-child(' + (item + 1) + ')').join(',') +
        '){display:none !important;}</style>',
    );
  }
  handlePrint(elTable.$el.outerHTML, title, head);
};
