## Movie App
The Movie App stands out as an application that allows TV series and movie enthusiasts to watch trailers of TV series and movies and get detailed information. Central to its design is React, while Firebase not only fortifies the backend infrastructure but also introduces a seamless Google sign-in mechanism, enhancing accessibility and security. The application’s state is deftly managed by the Context API, providing a fluid and consistent user experience. The visual finesse is achieved through Tailwind CSS, which ensures a stylish and adaptable layout.

## 🌐 Live Demo

Check out the live demo of the application [here](https://movie-app-yksl.vercel.app/).

## 📁 Project Structure

```
Movie App
|
├── public
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
├── src
│    ├── assets
│    │     ├──icons
│    │         └── avatar.png
│    │         └── GoogleIcon.js
│    ├── auth
│    │     └── Firebase.js
│    ├── components
│    │     ├── MovieCard.jsx
│    │     ├── Navbar.jsx
│    │     ├── SerieCard.jsx
│    │     ├── Switch.jsx
│    │     └── VideoSection.jsx
│    ├── context
│    │     ├── AuthProvider.jsx
│    ├── helpers
│    │     └── ToastNotify.js
│    ├── pages
│    │     ├── Login.jsx
│    │     ├── Main.jsx
│    │     ├── MovieDetail.jsx
│    │     ├── Register.jsx
│    │     ├── SerieDetail.jsx
│    │     └── Series.jsx
│    ├── router
│    │     ├── AppRouter.jsx
│    │     └── PrivateRouter.jsx
│    ├── App.js
│    ├── index.js
│    └── index.css
├── package.json
├── README.md
├── tailwind.config.js
└── yarn.lock
```


## 🛠 Technologies Utilized

- **React:** Powers the interactive user interface.
- **Firebase:** Provides a secure backend with authentication.
- **Tailwind CSS:** Delivers a customizable and responsive design.
- **Context API:** Manages the global state without prop drilling.
- **Axios:** Facilitates promise-based HTTP requests.
- **React-toastify:** Enhances user interaction with toast notifications.

## 🤝 Contributions
I welcome contributions! If you find any bugs, have suggestions, or want to contribute, please open an issue or send a pull request. Your feedback and contributions are greatly appreciated.

