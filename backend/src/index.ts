import cartRouter from "@routes/cart";
import productsRouter from "@routes/products";
import { app } from "server";

const PORT = 4000;

// Rutas
app.use("/products", productsRouter);
app.use("/cart", cartRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
