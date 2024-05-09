const DynamicPage = ({ params, searchParams }) => {
  console.log(params);

  // SearchParams for this kind of query routes http://localhost:3000/products/1?category=Laptop&price=100
  console.log(searchParams);
  return (
    <div>
      <h1 className="">This is dynamic page: {params?.id}</h1>
      <h1 className="">Search by: {searchParams?.category}</h1>
    </div>
  );
};

export default DynamicPage;
