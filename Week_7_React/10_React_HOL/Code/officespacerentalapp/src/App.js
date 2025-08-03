
import './App.css';

function App() {
  const officeSpaces = [
    { id: 1, Name: "DBS", Rent: 50000, Address: "Chennai", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
    { id: 2, Name: "Tech Hub", Rent: 75000, Address: "Mumbai", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
    { id: 3, Name: "Cube", Rent: 45000, Address: "Bangalore", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
    ];
  let colors = [];
  officeSpaces.forEach((office) => {
    if (office.Rent <= 60000) {
      colors.push('red');
    } else {
      colors.push('green');
    }
  });

  return (
    <div className="App">
      <div className="office-list">
        <h2>All Available Office Spaces</h2>
        {officeSpaces.map((office, index) => (
          <div key={office.id} className="office-card">
            <h2>{office.Name} Office Space</h2>
            <img 
              src={office.image} 
              alt={office.Name}
              className="office-image"
            />
            <div className="office-details">
              <p><strong>Name:</strong> {office.Name}</p>
              <p style={{ color: colors[index], fontWeight: 'bold', fontSize: '1.2rem' }}>
                <strong>Rent: Rs. {office.Rent}</strong>
              </p>
              <p><strong>Address:</strong> {office.Address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
