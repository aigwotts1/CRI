# CRI Inventory & Billing

A responsive inventory and invoicing application built with Vite, JavaScript and jsPDF.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

Open the local URL shown in the terminal. On Windows PowerShell, use `npm.cmd` if execution policy blocks `npm`.

```sh
npm test
npm run build
npm run preview
```

## Workflow

1. Set business details for the invoice header.
2. Add products with selling prices in INR, optional unique SKUs, and stock quantities.
3. Select products in Create bill, adjust quantities, and optionally add customer information, discount, tax and a note.
4. Generate the bill to save an immutable invoice, deduct stock and download its PDF.
5. Re-download or print invoices from Bill history. The print action opens the PDF viewer; use its Print button if the browser does not print automatically.
6. Export and restore JSON backups in Business details.

Data is stored in localStorage in the current browser and origin. There is no server, account system or cross-device synchronization. Export backups regularly. Clearing browser data removes this workspace. Tax rates are entered manually; verify your own invoicing requirements. PDF uses the standard Helvetica font with INR amounts; non-Latin text currently falls back to question marks in PDFs. The interface accepts Unicode text.

The app starts empty and includes no fictional stock or bills. Static production files are generated into `dist/` and can be hosted on any static web server. Internet access is optional for the Google Fonts stylesheet; system fonts are used when offline.
