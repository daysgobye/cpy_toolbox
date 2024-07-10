const sheetId = "1dWWog3wKZEic6EWi1G6T4RymKuqI3rLZskOVoc8s1PQ",
    apikey = "FPOKIaRAX9xNkcBkGMVf-xyBLMtUBUnPyP_H3Z9nG-sBqPZ82o7bzfaNZv4"

export type SheetRow = {
    ts: string
    items: { name: string, qty: number, price: number }[]
    subTotal: number
    tax: number
    total: number
    cashcard: "cash" | "card"
}

export const saveRowData = async (row: SheetRow) => {

    return await fetch("https://api.sheetson.com/v2/sheets/sales", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apikey}`,
            "X-Spreadsheet-Id": sheetId,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...row, items: row.items.map(item => `${item.name} x ${item.qty} @ $${item.price}`).join("\n") })
    }).then(r => r.json())
        .then(result => console.log(result))
}  