document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Robusta Brazil",
        img: "1.webp",
        price: 20_000,
      },
      {
        id: 2,
        name: "Arabica Blend",
        img: "2.webp",
        price: 25_000,
      },
      {
        id: 3,
        name: "Primo Passo",
        img: "3.webp",
        price: 30_000,
      },
      {
        id: 4,
        name: "Aceh Gayo",
        img: "4.webp",
        price: 35_000,
      },
      {
        id: 5,
        name: "Sumatra Mandheling",
        img: "5.webp",
        price: 40_000,
      },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      const cartItem = this.items.find((item) => {
        return item.id === newItem.id;
      });

      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        this.items = this.items.map((item) => {
          if (item.id !== newItem.id) {
            return item;
          } else {
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      const cartItem = this.items.find((item) => id === item.id);
      if (cartItem.quantity === 1) {
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
        return;
      } else if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            this.quantity--;
            this.total -= item.price;
            item.total = item.quantity * item.price;
            return item;
          }
        });
      }
    },
  });
});
