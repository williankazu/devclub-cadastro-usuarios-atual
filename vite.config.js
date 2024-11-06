import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/devclub-cadastro-usuarios-atual/'  // Caminho base do repositório
});
