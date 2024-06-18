import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      method: "GET",
      cache: "no-cache",
    });

    return res.json();
  } catch (error) {
    console.log("Failed to get Tickets", error);
  }
};
const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCategories = Array.from(
    new Set(tickets?.map(({ category }) => category))
  );

  return (
    <div className="p-5 ">
      <p>{JSON.stringify(tickets)}</p>
      <p>{JSON.stringify(uniqueCategories)}</p>
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, index) => {
            <div key={index} className="mb-4">
              <h2 className="text-2xl">{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category == uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>;
          })}
      </div>
    </div>
  );
};

export default Dashboard;
