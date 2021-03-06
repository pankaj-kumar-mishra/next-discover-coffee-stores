import { fetchCoffeeStores } from "../../lib/coffee-stores";

const getCoffeeStoresByLocation = async (req, res) => {
  try {
    // configure latLng and limit
    const { latLng, limit } = req.query;
    const response = await fetchCoffeeStores(latLng, limit);
    // return response
    res.status(200).json({ status: true, data: response });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, error, message: "Something went wrong!" });
  }
};

export default getCoffeeStoresByLocation;
