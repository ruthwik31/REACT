import ItemList from "./ItemList";
const RestaurantCategory = ({ info }) => {
  console.log(info);
  return (
    <div>
      {/*Header*/}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
        <div className="ml-4.5 mr-3 flex justify-between items-center">
          {/*text-center*/}
          <span className="font-bold text-lg">
            {info.title} ({info.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <ItemList items={info.itemCards} />
      </div>
      {/*Accordian*/}
    </div>
  );
};
export default RestaurantCategory;
