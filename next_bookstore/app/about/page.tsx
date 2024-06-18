const page = ({ data }: { data: any }) => {
  return (
    <section className="bg-[url('/aboutus_hero.jpg')] bg-cover bg-blue-500 text-white">
      <div>
        <h1>Your Bookstore</h1>
        {data ? (
          <ul>
            {data.map((item: any) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export async function getServerSideProps() {
  try {
    const apiUrl = "http://localhost:3000/api/fetchData";
    const response = await fetch(apiUrl);
    const data = await response.json();

    return {
      props: { data },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { data: null },
    };
  }
}

export default page;
