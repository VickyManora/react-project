import Directory from '../../components/directory/directory.component';
const  Home= ()=> {

  const categories=[
    {
      "id": 1,
      "title": "Hats",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0397/0396/9949/collections/View_All_Men_s_hats_1400x.progressive.jpg?v=1669887753"
    },
    {
      "id": 2,
      "title": "Jackets",
      "imageUrl": "https://www.shutterstock.com/image-photo/new-collection-different-color-spring-260nw-1708662301.jpg"
    },
    {
      "id": 3,
      "title": "Sneakers",
      "imageUrl": "https://cms-cdn.thesolesupplier.co.uk/2022/08/floating-shelves_w1160.jpg"
    },
    {
      "id": 4,
      "title": "Womens",
      "imageUrl": "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/02/20/12/lfwstreetstyle2002j.jpg?width=1200&auto=webp&quality=75"
    },
    {
      "id": 5,
      "title": "Mens",
      "imageUrl": "https://www.apetogentleman.com/wp-content/uploads/2022/03/1960s-mens-fashion.jpg"
    }
  ]
  return (
    <Directory  categories={categories} />
  );
}

export default Home;