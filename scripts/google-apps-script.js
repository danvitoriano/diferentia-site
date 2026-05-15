/**
 * DIFERENTIA — Google Apps Script para captura de leads
 * -------------------------------------------------------
 * Como usar:
 *
 * 1. Abra o Google Sheets em que quer salvar os leads
 * 2. Vá em Extensões → Apps Script
 * 3. Cole TODO o conteúdo deste arquivo e salve (Ctrl+S)
 * 4. Clique em "Implantar" → "Nova implantação"
 *    - Tipo: Aplicativo da Web
 *    - Executar como: Eu mesmo
 *    - Quem tem acesso: Qualquer pessoa (anônimo)
 * 5. Clique em Implantar e autorize as permissões
 * 6. Copie a URL gerada (algo como https://script.google.com/macros/s/.../exec)
 * 7. Cole essa URL em .env.local como GOOGLE_SCRIPT_URL=...
 *    E também no painel da Vercel em Settings → Environment Variables
 *
 * IMPORTANTE: sempre que editar o script, crie uma NOVA implantação
 * (não edite a existente), senão a URL antiga para de funcionar.
 */

const SHEET_NAME = "Leads"; // nome da aba onde os dados serão salvos

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    // Cria a aba e cabeçalho se não existir
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        "Timestamp",
        "Nome",
        "E-mail",
        "Empresa",
        "Mensagem",
      ]);
      sheet.setFrozenRows(1);

      // Formata cabeçalho
      const header = sheet.getRange(1, 1, 1, 5);
      header.setFontWeight("bold");
      header.setBackground("#1a1a2e");
      header.setFontColor("#ffffff");
    }

    // Adiciona linha com os dados do lead
    sheet.appendRow([
      data.timestamp ?? new Date().toISOString(),
      data.name ?? "",
      data.email ?? "",
      data.company ?? "",
      data.message ?? "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: err.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Útil para testar manualmente via URL GET no browser
function doGet() {
  return ContentService.createTextOutput("Diferentia lead collector — OK");
}
