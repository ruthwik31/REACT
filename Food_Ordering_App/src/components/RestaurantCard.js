import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-grey-100 hover:bg-gray-400">
      <img
        className="rounded-lg w-full"
        alt="res-logo" /*specifies an alternate text for an image, if the image cannot be displayed*/
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating: {avgRating}</h4>
      <h4>delivery Time:{sla?.slaString}</h4>
    </div>
  );
};
export default RestaurantCard;