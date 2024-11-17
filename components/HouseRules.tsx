const HouseRules = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
    <div>
      <h1 className="text-xl font-bold mb-4">House Rules</h1>
    </div>
    <div>
      <div className="mb-4">
        <h2 className="font-semibold">Check-in</h2>
        <p>After 3:00 PM</p>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold">Check-out</h2>
        <p>Before 11:00 AM</p>
      </div>
    </div>
    <div>
      <h2 className="font-semibold">Smoking</h2>
      <p>Smoking is not permitted.</p>
    </div>
  </div>
);

export default HouseRules;
