# Local Chat

![image](https://github.com/user-attachments/assets/788d8d67-0497-45c8-baf1-758f35e1b034)


## Overview

This project is a modern web application built with the following technologies:

- **JavaScript**: Core programming language.
- **React**: Library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework.
- **Python**: Backend programming language.
- **Flask**: Lightweight WSGI web application framework for Python.
- **Llama 3.1 8b-Intruct**: The smallest but powerfull model made by Meta.

## Features

- **Functional and Declarative Programming**: Emphasis on functional components and hooks.
- **Responsive Design**: Mobile-first approach using Tailwind CSS.
- **State Management**: Global state managed with Zustand.
- **Code Splitting**: Implemented with React.lazy() and Suspense.
- **Form Handling**: Controlled components and validation with react-hook-form and Zod.
- **Error Handling**: Comprehensive error handling and logging.
- **Accessibility**: Semantic HTML and ARIA attributes for better accessibility.
- **Testing**: Unit and integration tests with Jest and React Testing Library.
- **Internationalization**: Support for multiple languages using react-intl or next-i18next.
- **AI Integration**: Backend powered by advanced AI models for intelligent responses and interactions.


## File Structure

````
plaintext
project-root/
├── client/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── ui/
│ │ │ │ ├── button.jsx
│ │ │ │ ├── scroll-area.jsx
│ │ │ ├── chatBubble.jsx
│ │ │ ├── chatHistory.jsx
│ │ │ ├── newChat.jsx
│ │ │ ├── question.jsx
│ │ ├── App.css
│ │ ├── App.jsx
│ │ ├── index.css
│ ├── package.json
│ ├── tailwind.config.js
├── server/
│ ├── agents/
│ │ ├── assistant.py
│ ├── main.py
│ ├── requirements.txt
├── .env
├── README.md
````


## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies for the client:
   ```sh
   cd client
   npm install
   ```

3. Install dependencies for the server:
   ```sh
   cd ../server
   pip install -r requirements.txt
   ```

4. Run the development server for the client:
   ```sh
   cd ../client
   npm run dev
   ```

5. Run the development server for the server:
   ```sh
   cd ../server
   python main.py
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser for the client and [http://localhost:8080](http://localhost:8080) for the server.

## Scripts

### Client

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run start`: Start the production server.
- `npm run lint`: Run ESLint to check for code quality issues.
- `npm run test`: Run tests with Jest.

### Server

- `python main.py`: Start the Flask server.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Shadcn UI](https://shadcn.dev/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Stylus](https://stylus-lang.com/)
- [Flask](https://flask.palletsprojects.com/)
- [Ollama](https://ollama.com/) for AI model integration

## Contact

For any questions or feedback, please contact [jmrodriguezm13@gmail.com](jmrodriguezm13@gmail.com).
