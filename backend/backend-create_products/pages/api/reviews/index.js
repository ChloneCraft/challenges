import dbConnect from "../../../db/connect";
import Review from "../../../db/models/Review";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const review = await Review.find();
    return response.status(200).json(review);
  }
  if (request.method === "POST") {
    try {
      // await Product.create(request.body);
      const reviewData = request.body;
      const review = new Review(reviewData);
      const newReview = await review.save();
      const reviewID = JSON.stringify(newReview._id);
      console.log(typeof reviewID);
      //add reviewID to array of product

      return response.status(201).json({ status: "Product created." });
    } catch (err) {
      console.log(err);
      return response.status(400).json({ error: err.message });
    }
  }
}
