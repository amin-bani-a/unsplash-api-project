import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url =
  "https://api.unsplash.com/search/photos?client_id=ZjKgQpxdQu7JmXhVfscQlHJmfdKsaEjD1PDy6prj3eU&query=dog";

const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);
      console.log(response);
      return result.data;
    },
  });

  return <h2>Gallery</h2>;
};

export default Gallery;
