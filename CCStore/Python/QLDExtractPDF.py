import PyPDF2

pdfFileObj = open(href='https://www.dptiapps.com.au/data/OutbackRoads/Outback Roads Temporary Closures, Restrictions and Warnings Report.PDF', 'rb')

pdfReader = PyPDF2.PdfFileReader(pdfFileObj)

print(pdfReader.numPages)

pageObj = pdfReader.getPage(0)

print(pageObj.extractText())

pdfFileObj.close()
