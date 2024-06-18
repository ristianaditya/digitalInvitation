import { utils, writeFile } from 'xlsx'

export function useExportExcel() {
  const exportToExcel = (data, fileName = 'data.xlsx') => {
    // Membuat work sheet dari data
    const ws = utils.json_to_sheet(data)

    // Membuat work book dan menambahkan work sheet ke dalamnya
    const wb = utils.book_new()
    utils.book_append_sheet(wb, ws, 'payment')

    // Menulis work book ke file
    writeFile(wb, fileName, { bookType: 'xlsx', type: 'array' })
  }

  return {
    exportToExcel,
  }
}
