const Card = ({ breed }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mx-auto max-w-md">
      <h2 className="text-2xl font-bold mb-2">{breed.attributes.name}</h2>
      <p className="text-gray-600 mb-4">{breed.attributes.description}</p>
      <hr className="border-gray-300 my-2" />
      <div className="flex justify-between text-gray-700">
        <span>Life Expectancy:</span>
        <span>{breed.attributes["life-expectancy"]} years</span>
      </div>
      <hr className="border-gray-300 my-2" />
      <div className="flex justify-between text-gray-700">
        <span>Hypoallergenic:</span>
        <span>{breed.attributes.hypoallergenic ? "Yes" : "No"}</span>
      </div>
      <button
        onClick={() => (window.location.href = `/breeds/${breed.id}`)}
        className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700"
      >
        View More Details
      </button>
    </div>
  );
};

export default Card;
