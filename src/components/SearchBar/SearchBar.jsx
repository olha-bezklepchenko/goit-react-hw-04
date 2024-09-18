import { Formik, Field, Form } from "formik";
// import toast from "react-hot-toast";

const SearchBar = (onSubmit) => {
  const initialValues = {
    query: "",
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Field
          name="query"
          // type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
