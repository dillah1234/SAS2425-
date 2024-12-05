export const cardData = [
    {
      id: 1,
      name: "Laptop A",
      price: "Rp 5.000.000",
      description: "Laptop dengan performa tinggi untuk pekerjaan profesional.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Smartphone B",
      price: "Rp 3.000.000",
      description:
        "Smartphone canggih dengan kamera 48MP dan baterai tahan lama.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Tablet C",
      price: "Rp 2.000.000",
      description:
        "Tablet ringan dengan layar besar untuk pengalaman multimedia.",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  const Card = ({ title, description, image, buttonText }) => (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', maxWidth: '300px' }}>
      <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button style={{ padding: '8px 16px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
        {buttonText}
      </button>
    </div>
  );
  
  const App = () => {
    return (
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {cardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    );
  };
  
  export default App;

