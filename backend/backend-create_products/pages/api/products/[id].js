import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";
import Review from "../../../db/models/Review";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }
  if (request.method === "PUT") {
    console.log("requestbody", request.body);
    const ProductToUpdate = await Product.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json({ status: "Product successfully updated." });
  }
  if (request.method === "DELETE") {
    const deletedProduct = await Product.findByIdAndDelete(id);
    await Review.deleteMany({ _id: { $id: deletedProduct.reviews } });
    response.status(200).json({ status: "Product successfully deleted." });
  }
}
