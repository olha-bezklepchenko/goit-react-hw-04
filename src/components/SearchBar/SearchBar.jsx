import { Formik, Field, Form } from "formik";
import toast from "react-hot-toast";

const SearchBar = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    if (!values.query.trim()) {
      toast.error("Please enter a search term.");
      return;
    }
    setQuery(values.query);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field
          name="query"
          type="text"
          autoFocus
          autoComplete="off"
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
