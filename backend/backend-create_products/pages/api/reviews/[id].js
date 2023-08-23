import dbConnect from "../../../db/connect";
import Review from "../../../db/models/Review";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const review = await Review.findById(id).populate("reviews");

    if (!product) {
      return review.status(404).json({ status: "Not Found" });
    }
    if (request.method === "POST") {
      try {
        // await Product.create(request.body);
        const reviewData = review.body;
        const review = new Review(reviewData);
        await review.save();
        return response.status(201).json({ status: "Review created." });
      } catch (err) {
        console.log(err);
        return response.status(400).json({ error: err.message });
      }
    }

    response.status(200).json(review);
  }
}
