import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, deliveryTime, cloudinaryImageId } =
    resData?.data;
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-img"
        alt="res-logo" /*specifies an alternate text for an image, if the image cannot be displayed*/
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating: {avgRating}</h4>
      <h4>delivery Time:{deliveryTime}</h4>
    </div>
  );
};
export default RestaurantCard;
