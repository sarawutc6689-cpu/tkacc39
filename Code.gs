function doGet() {
  return HtmlService.createTemplateFromFile('HomePage')
    .evaluate()
    .setTitle('TKACC39 | หน้าแรก')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
