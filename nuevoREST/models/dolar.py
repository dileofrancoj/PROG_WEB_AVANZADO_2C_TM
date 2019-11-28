import requests
class Dolar:
    def __init__(self):
        self.url = "https://www.cronista.com/MercadosOnline/json/homegetPrincipal.html"
        self.data = ""

    def getDolar():
        self.res = requests.get(self.url)
        self.data = self.res.json()
        print(data)

app = Dolar()
app.getDolar()