import Employeee from "./Employee";


class Client {
  private _name: string
  constructor(n: string) {
    this._name = n
  }

  get name() {
    return this._name
  }

  set name(value: string) {
    value.length < 3 ? console.log('Nome precisa ter no minimo 3 caracteres') : this._name = value;
  }
}

class Item {
  private _name: string
  private _price: number

  constructor(n: string, p: number) {
    this._name = n
    this._price = p
  }

  get name() {
    return this._name
  }

  set name(value: string) {
    value.length < 3 ? console.log('Item precisa ter no minimo 3 caracteres') : this._name = value;
  }

  get price() {
    return this._price
  }

  set price(value: number) {
    if (value < 0) {
      'nao é permitido colocar numeros negativos como preço.'
    }
    this._price = value
  }
}

class Pedido {
  private _client: Client
  private _items: Item[]
  private _pagamento: string
  private _desconto: number

  constructor(client: Client, items: Item[], pagamento: string, desconto: number = 0) {
    this._client = client
    this._items = items
    this._pagamento = pagamento
    this._desconto = desconto
  }

  get client() {
    return this._client
  }

  set client(value: Client) {
    this._client = value;
  }

  get items() {
    return this._items
  }

  set items(value: Item[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }
    this._items = value
  }

  get pagamento() {
    return this._pagamento
  }

  set pagamento(value: string) {
    this.pagamento = value
  }

  get desconto() {
    return this._desconto
  }

  set desconto(value: number) {
    this._desconto = value
  }

  sumTotal() {
    const arrayNumber = this._items.map((i) => i.price)
    const total = arrayNumber.reduce((acc, acr) => acc + acr, 0)
    return total
  }

  totalOfDescount() {
    const total = this.sumTotal();

    const valorComDesconto = total - (total * this._desconto);

    return valorComDesconto;
  }
}

const client1 = new Client('Patrik')

const item1 = new Item('Coxinha', 5)

const item2 = new Item('Cocacola 600', 6)

const pedido1 = new Pedido(client1, [item1, item1, item2], 'cartão')


const testeInterfaceEmployee : Employeee = {
  registration: 'sdsdsadsadasdsada',
  salary: 8000,
  admissionDate: new Date('2005-11-16'),

  generateRegistration() {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `FNC${randomStr}`
  }
}

console.log(testeInterfaceEmployee);




