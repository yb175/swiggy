
# 🍛 Swiggy Functional Clone

![React](https://img.shields.io/badge/React-18.2-blue?logo=react)
![Redux](https://img.shields.io/badge/Redux-Toolkit-purple?logo=redux)
![Tailwind](https://img.shields.io/badge/Styled%20with-TailwindCSS-blue?logo=tailwindcss)
![Status](https://img.shields.io/badge/Status-Functional%20Clone-green)
![Live API](https://img.shields.io/badge/API-Swiggy%20Live-yellow)
![Made By](https://img.shields.io/badge/Made%20by-Your%20Name-blue)

> A fully functional frontend clone of **Swiggy** built using live Swiggy APIs.  
> Includes restaurant listings, menu browsing, cart system, and seamless routing.  
> State is managed using Redux Toolkit and all requests are proxied via Horeka to bypass CORS.

---

## 🎥 Demo Preview

Coming Soon! (You can add Loom, GIFs, or local recordings later)

<!-- Example:
![Demo](https://github.com/your-username/swiggy-clone/assets/demo.gif)
-->

---

## 📌 Features

### ✅ Core Functionalities:

- 🏪 **Restaurant Listing** – Fetched from Swiggy live API using Horeka proxy  
- 📖 **Menu View** – Real-time data, dynamic routes, scrollable offers section  
- 🛒 **Cart System** – Add, increment, decrement, remove and reset items  
- 🧠 **Redux Toolkit** – Global state management for cart & restaurant data  
- 🔍 **Search Bar** – Search/filter menu items dynamically  
- 🖼️ **Image Grid & Offers** – Horizontally scrollable grocery and promo sections  
- 🎯 **Lucide Icons** – Minimalist vector icons used throughout

---

## 🧱 Tech Stack

| Technology      | Role                             |
|-----------------|----------------------------------|
| ⚛️ React         | UI rendering & routing           |
| 🧠 Redux Toolkit | Global state (cart, data)        |
| 💅 Tailwind CSS  | Utility-first styling            |
| 🔀 React Router  | Client-side page navigation      |
| 🧲 Horeka Proxy  | Used to bypass CORS for Swiggy APIs |
| 🖼️ Lucide React  | Icons for modern UI             |

---

## 🗂️ Folder Structure

```

swiggy-functional-clone/
│
├── components/
│   ├── Home.jsx
│   ├── SecondaryHome.jsx
│   ├── Restaurants.jsx
│   ├── Menu.jsx
│   ├── Cart.jsx
│   ├── SearchItem.jsx
│   └── Header.jsx
│
├── cards/
│   ├── RestCard.jsx
│   ├── MenuCard.jsx
│   ├── OfferCard.jsx
│   ├── MenuDisplay.jsx
│   └── Shimmer.jsx
│
├── slice/
│   ├── restaurantSlice.js
│   └── cartSlice.js
│
├── uiComponents/
│   ├── scroll.js
│   └── spinners/
│       ├── Spinner.jsx
│       └── spinner.css
│
├── assets/
│   └── staticData.js
│
├── App.jsx
├── main.jsx
├── store.js
└── index.html

````

---

## ⚙️ Setup Instructions

### 📦 Clone the Repository

```bash
git clone https://github.com/yourusername/swiggy-functional-clone.git
cd swiggy-functional-clone
````

---

### 📥 Install Dependencies

```bash
npm install
```

---

### ▶️ Start the App

```bash
npm run dev
# or
npm start
```

> App runs at: [http://localhost:3000](http://localhost:3000)

---

## 🔌 API Access via Horeka Proxy

All API requests are routed like this to bypass CORS:

```
https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?...  
https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=...  
```

You may edit latitude/longitude for personalized location data.

---

## 📤 Cart State Management

Cart features include:

* Add new items 🛒
* Increment/Decrement quantity ➕➖
* Clear entire cart 🧹
* Cart is linked to a single restaurant at a time

---

## 🔮 Upcoming Enhancements

* UI Toast for cart reset
* Save cart in `localStorage`
* ⚠️ Restrict adding items from multiple restaurants (Alert + Confirmation UI)
---

## 🙋‍♂️ Developer

**Yug Bhatia**
📫 [GitHub](https://github.com/yb175)
📷 [LinkedIn](https://linkedin.com/in/yourlinkedin)

> *"Code, Eat, Repeat 🍔"*

---

## 🛑 Disclaimer

This project is not affiliated with Swiggy.
It is built purely for educational and learning purposes using publicly available APIs.

---

## 📜 License

MIT License © 2025



---

