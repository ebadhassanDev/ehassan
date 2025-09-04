# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Styled Components. This portfolio showcases my work, skills, and provides a way for potential employers or clients to get in touch with me.

## Features

- **Responsive Design**: Works on all device sizes
- **Modern UI**: Clean and professional design with smooth animations
- **Project Showcase**: Display your projects with details and links
- **Contact Form**: Easy way for visitors to reach out to you
- **Dark Theme**: Easy on the eyes with a dark color scheme
- **Performance Optimized**: Fast loading and smooth interactions

## Technologies Used

- React 18
- TypeScript
- Styled Components
- Framer Motion (for animations)
- React Icons
- React Scroll (for smooth scrolling)
- EmailJS (for contact form functionality)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory and add your EmailJS credentials:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Customization

### Update Your Information

1. **Personal Information**:
   - Update your name, email, and social media links in the `Hero` component.
   - Update the about section in the `About` component.
   - Update the projects in the `Projects` component.

2. **Styling**:
   - Customize colors, fonts, and other styles in `src/styles/theme.ts`.
   - Modify global styles in `src/styles/GlobalStyles.ts`.

3. **Images**:
   - Replace the placeholder images in the `public` folder with your own.
   - Update image paths in the respective components.

### Adding Projects

To add or modify projects, edit the `projects` array in the `Projects` component. Each project should include:

```typescript
{
  title: 'Project Title',
  description: 'Project description',
  technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
  github: 'GitHub URL',
  demo: 'Live Demo URL',
  image: 'path/to/image.jpg'
}
```

## Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

This will create a `build` folder with the production-ready files.

### Deploy to Netlify

1. Push your code to a GitHub repository.
2. Sign up/Log in to [Netlify](https://www.netlify.com/).
3. Click on "New site from Git".
4. Select your repository.
5. Set the build command to `npm run build` or `yarn build`.
6. Set the publish directory to `build`.
7. Click "Deploy site".

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

Feel free to customize this template to make it your own. If you have any questions or run into any issues, please open an issue on the GitHub repository.
