const DetailsCard = ({ breed }) => {
  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-lg p-8">
      <h1 className="text-3xl font-bold mb-4">{breed.attributes.name}</h1>
      <p className="mb-6">{breed.attributes.description}</p>
      <hr className="border-gray-600 my-2" />
      <div className="flex justify-between">
        <span className="text-gray-400">Breed ID</span>
        <span>{breed.id}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Life Expectancy</span>
        <span>{breed.attributes["life-expectancy"]} years</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Weight Range</span>
        <div>
          <p>Male: {breed.attributes["weight-range"]?.male} kg</p>
          <p>Female: {breed.attributes["weight-range"]?.female} kg</p>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Hypoallergenic</span>
        <span>{breed.attributes.hypoallergenic ? "Yes" : "No"}</span>
      </div>
    </div>
  );
};

export default DetailsCard;
