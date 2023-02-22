const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };

  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const personOrder = order.name;
    const phoneNumber = order.phoneNumber
    const street = order.address.street
    return `olá ${deliveryPerson} entrega para: ${personOrder}, Telefone: ${phoneNumber}, ${street}, Nº: ${order.address.number}, AP: ${order.address.apartment} `
  
  };
  
  console.log(customerInfo(order));
  
  const orderModifier = (order, key, value) => {
    // Adicione abaixo as informações necessárias.
    order[key] = value
    return `Olá ${order.name} o total do seu pedido de ${Object.keys(order.order.pizza)} e ${order.order.drinks.coke.type} é  ${order.payment.total} R$`
  };
  
  orderModifier(order, "name", 'MARIA');

  console.log(orderModifier(order, 'payment', {total:30}));
