import dbConnect from "../../../db/connect";
import Review from "../../../db/models/Review";
import Product from "../../../db/models/Product";
import { useRouter } from "next/router";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  // const router = useRouter();
  // const { push } = router;

  if (request.method === "GET") {
    const review = await Review.findById(id).populate("reviews");

    if (!review) {
      return review.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(review);
  } else if (request.method === "POST") {
    console.log("test");
    try {
      // await Product.create(request.body);
      const reviewData = request.body;
      const review = new Review(reviewData);
      const newReview = await review.save();
      // const reviewID = JSON.stringify(newReview._id);
      console.log("reviewID", newReview._id);
      await Product.findByIdAndUpdate(
        id,
        { $push: { reviews: newReview._id } },
        { new: true }
      );
      // .catch((updateErr) => {
      //   console.error("Error updating document:", updateErr);
      // });
      // push(`/${id}`);

      return response.status(201).json({ status: "Review created." });
    } catch (err) {
      console.log("error in api [id] handler}", err);
      return response.status(400).json({ error: err.message });
    }
  }
}
