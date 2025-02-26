import { CDN_URL } from "../utils/constants";
const ItemList = (items) => {
  // console.log(items);
  const { data } = items;
  return (
    <>
      {data.map((item) => (
        <div className="m-2 p-2 shadow" key={item.card.info.id}>
          <div className="flex justify-between">
            <div>
              <div>{item.card.info.name}</div>
              <div>₹ {item.card.info.price / 100}</div>
            </div>
            <div>
              <img
                className="w-[150px] h-[100px] rounded object-cover"
                src={CDN_URL + item.card.info.imageId}
                alt="Error"
              />
              <div className="mt-2 mx-10 rounded-2xl border bg-white">
                <button className="cursor-pointer w-[65px] text-green-500 font-bold">
                  Add+
                </button>
              </div>
            </div>
          </div>
          <div className="mt-3 flex text-pretty text-gray-600">
            <div>{item.card.info.description}</div>
          </div>
        </div>
      ))}
    </>
  );
};
export default ItemList;
