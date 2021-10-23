const INITIAL_STATE = {
  tShirts: [
    {
      name: "Shirt 1",
      price: "250",
      initialRating: 4,
      src: ""
    },
    {
      name: "Shirt 2",
      price: "280",
      initialRating: 4.5,
      src: ""
    },
    {
      name: "Shirt 3",
      price: "300",
      initialRating: 5,
      src: ""
    }
  ],
  utensils: [
    {
      name: "Utensil 1",
      price: "350",
      initialRating: 4,
      src: ""
    },
    {
      name: "Utensil 2",
      price: "500",
      initialRating: 4.5,
      src: ""
    },
    {
      name: "Utensil 3",
      price: "800",
      initialRating: 5,
      src: ""
    }
  ],
  accessories: [
    {
      name: "Accessory 1",
      price: "200",
      initialRating: 4,
      src: ""
    },
    {
      name: "Accessory 2",
      price: "400",
      initialRating: 4.5,
      src: ""
    },
    {
      name: "Accessory 3",
      price: "600",
      initialRating: 5,
      src: ""
    }
  ]
}

const reducer = (state = INITIAL_STATE) => {
  return state;
}

export default reducer;