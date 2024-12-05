
import Card from './Card'; 


const App = () => {
  return (
    <div className="min-h-screen bg-gray-500 flex items-left mx-auto">
      <Card
        title="Beautiful Landscape"
        description="Explore the beauty of nature with this amazing scenery."
        imageUrl="https://via.placeholder.com/150"
        buttonLabel="learn more"
      />
    </div>
  );
};

export default App;