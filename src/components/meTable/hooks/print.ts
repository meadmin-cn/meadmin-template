let printFrame = null as HTMLIFrameElement | null;
export function getExportBlobByContent(content: string, type = 'text/html') {
  return new Blob([content], { type: `${type};charset=utf-8;` });
}

export function createHtmlPage(content: string, title = '', style: string[] = []): string {
  const styleString = style.join(`\n`);
  return [
    '<!DOCTYPE html><html>',
    '<head>',
    '<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui">',
    `<title>${title}</title>`,
    `<style>${styleString}</style>`,
    '</head>',
    `<body>${content}</body>`,
    '</html>',
  ].join('');
}

export function createFrame(): HTMLIFrameElement {
  const frame = document.createElement('iframe');
  frame.className = 'me--print-frame';
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

export function handlePrint(content: string, title = '', style: string[] = [], type = 'text/html'): void {
  content = createHtmlPage(content, title, style);
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

export default async (elTable: ELTable, title = '', style: string[] = []) => {
  style.unshift((await import('@/styles/index.scss')).default);
  style.unshift((await import('element-plus/dist/index.css')).default);
  const index = elTable.getSelectionIndexs();
  if (index.length) {
    style.push(
      'tbody>tr:not(' +
        index.map((item) => 'tr:nth-child(' + (item + 1) + ')').join(',') +
        '){display:none !important;}',
    );
  }
  handlePrint(elTable.$el.outerHTML, title, style);
};
