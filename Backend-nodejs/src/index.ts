import app from './config/express';
import { connectToMongo } from './infrastructure/database/mongo';

const PORT = 4000;

(async () => {
    try {
      await connectToMongo();
  
      app.listen(PORT, () => {
        console.log(` Servidor ligado na porta  http://localhost:${PORT}`);
      });
    } catch (error) {
      console.error(' Erro ao conectar ao MongoDB:', error);
      process.exit(1);
    }
  })();
