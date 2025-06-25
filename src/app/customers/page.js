const CustomersPage = async ({ searchParams }) => {
    const page      = parseInt(searchParams?.page) || 1;
	const response  = await fetch(
		`http://localhost:3000/api/customers?page=${page}`,
		{
			cache: "no-store",
		}
	);
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	const data          = await response.json();
	const parse_data    = typeof data === "string" ? JSON.parse(data) : data;
	const customers     = parse_data.customers || [];
	return (
		<div>
			<h1>Customers</h1>

			{customers.length === 0 ? (
				<p>No customers found.</p>
			) : (
				customers.map((customer) => (
					<div key={customer._id} className="customer-card">
						<h2>{customer.name}</h2>
						<p>Email: {customer.email}</p>
						{/* other fields as needed */}
					</div>
				))
			)}

			<div className="pagination">
				{Array.from({ length: parse_data.totalPages }, (_, i) => (
					<a
						key={i}
						href={`?page=${i + 1}`}
						style={{
							padding: "4px 8px",
							margin: "2px",
							backgroundColor: page === i + 1 ? "#0070f3" : "#eee",
							color: page === i + 1 ? "#fff" : "#000",
							borderRadius: "4px",
							textDecoration: "none",
						}}>
						{i + 1}
					</a>
				))}
			</div>
		</div>
	);
};

export default CustomersPage;
