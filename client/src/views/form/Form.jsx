import React from "react";
import { useEffect, useState } from "react";
import style from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, postGame } from "../../redux/actions";
import { Link, useHistory } from "react-router-dom";


const validate = (input) => {
  let errors = {};
  let validationOK = true;

  if (!input.name) {
    errors.name = "Game Name is required";
    validationOK = false
  } else if (input.name.length < 4) {
    errors.name = "Game Name must have at least 4 characters";
    validationOK = false
  }
  if (!input.description) {
    errors.description = "Description is required";
    validationOK = false
  } else if (input.description.length < 8) {
    errors.description = "Description must have at least 8 characters";
    validationOK = false
  }
  if (!input.rating) {
    errors.rating = "Rating is required";
    validationOK = false
  } else if (!/^[1-5]$/.test(input.rating)) {
    errors.rating = "Rating must be between 1 and 5";
    validationOK = false
  }

  return errors;
};

const Form = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const [errors, setErrors] = useState({});
  const [platforms, setPlatforms] = useState([]);

  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: 0,
    platforms: "",
    genres: [],
  });

  useEffect(() => {
    dispatch(getGenres());
  }, []);


  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setInput({ ...input, [property]: value });
    setErrors(
      validate({
        ...input,
        [property]: value,
      })
    );
  };

  const handleCheck = (e) => {
    if (e.target.parentNode.id === "platforms") {
      if (e.target.checked) {
        setPlatforms([...platforms, e.target.name]);
      } else {
        setPlatforms(platforms.filter((plt) => plt !== e.target.name));
      }
    }
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      genres: [...input.genres, e.target.value],
    });
    
    alert("genreo ya seleccionado")
  };

  const handleDelete = (genre) => {
    setInput({
      ...input,
      genres: input.genres.filter((item) => item !== genre),
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(platforms.length > 0 && Object.keys(errors).length === 0 && input.genres.length > 0){
        let { name, description, released, rating, genres } = input;
        let arryofString = platforms.join();
        let newObject = {
          name,
          description,
          released,
          rating,
          genres,
          platforms: arryofString,
        };
    
        try {
          await dispatch(postGame(newObject));
          alert("Game created successfully");
          history.push("/home");
        } catch (error) {
          alert(error.response.data)
        }
    }else alert("Faltan campos por completar")
  };
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.formContainer}>
        <h4>
          <strong>Add a new video game</strong>
        </h4>
        <label htmlFor="name">
          <strong>Name:</strong>
        </label>
        <input
          type="text"
          name="name"
          placeholder="
                    Write a name..."
          value={input.name}
          onChange={handleChange}
          className={errors.name && style.error}
        />
        <p>{errors.name}</p>

        <label htmlFor="description">
          <strong>Description:</strong>
        </label>
        <input
          type="text"
          name="description"
          placeholder="
                    Write a Description..."
          value={input.description}
          onChange={handleChange}
          className={errors.description && style.error}
        />
        <p>{errors.description}</p>

        <label htmlFor="released">
          <strong>Released:</strong>
        </label>
        <input
          type="date"
          name="released"
          value={input.released}
          onChange={handleChange}
        />

        <label htmlFor="rating">
          <strong>Rating:</strong>
        </label>
        <input
          type="number"
          name="rating"
          placeholder="Select a rating..."
          value={input.rating}
          onChange={handleChange}
          className={errors.rating && style.error}
        />
        <p>{errors.rating}</p>

        <label className="title-name">
          <strong>Select a Platforms:</strong>
        </label>
        <div className={style.containercheck} id="platforms">
          <input name="PC" type="checkbox" id="PC" onChange={handleCheck} />
          <label htmlFor="PC">PC.</label>

          <input name="iOS" type="checkbox" id="iOS" onChange={handleCheck} />
          <label htmlFor="iOS">iOS.</label>

          <input
            name="Android"
            type="checkbox"
            id="Android"
            onChange={handleCheck}
          />
          <label htmlFor="Android">Android.</label>

          <input
            name="macOS"
            type="checkbox"
            id="macOS"
            onChange={handleCheck}
          />
          <label htmlFor="macOS">macOS.</label>

          <input
            name="PlayStation 2"
            type="checkbox"
            id="PlayStation 2"
            onChange={handleCheck}
          />
          <label htmlFor="PlayStation 2">PlayStation 2.</label>

          <input
            name="PlayStation 3"
            type="checkbox"
            id="PlayStation 3"
            onChange={handleCheck}
          />
          <label htmlFor="PlayStation 3">PlayStation 3.</label>

          <input
            name="PlayStation 4"
            type="checkbox"
            id="PlayStation 4"
            onChange={handleCheck}
          />
          <label htmlFor="PlayStation 4">PlayStation 4.</label>

          <input
            name="PlayStation 5"
            type="checkbox"
            id="PlayStation 5"
            onChange={handleCheck}
          />
          <label htmlFor="PlayStation 5">PlayStation 5.</label>

          <input
            name="Xbox One"
            type="checkbox"
            id="Xbox One"
            onChange={handleCheck}
          />
          <label htmlFor="Xbox One">Xbox One.</label>

          <input
            name="PXbox 360"
            type="checkbox"
            id="Xbox 360"
            onChange={handleCheck}
          />
          <label htmlFor="Xbox 360">Xbox 360.</label>

          <input
            name="Xbox Series S/X"
            type="checkbox"
            id="Xbox Series S/X"
            onChange={handleCheck}
          />
          <label htmlFor="Xbox Series S/X">Xbox Series S/X.</label>

          <input
            name="PS Vita"
            type="checkbox"
            id="PS Vita"
            onChange={handleCheck}
          />
          <label htmlFor="PS Vita">PS Vita.</label>

          <input
            name="Nintendo Switch"
            type="checkbox"
            id="Nintendo Switch"
            onChange={handleCheck}
          />
          <label htmlFor="Nintendo Switch">Nintendo Switch.</label>

          <input
            name="Nintendo 3DS"
            type="checkbox"
            id="Nintendo 3DS"
            onChange={handleCheck}
          />
          <label htmlFor="Nintendo 3DS">Nintendo 3DS.</label>

          <input
            name="Wii U"
            type="checkbox"
            id="Wii U"
            onChange={handleCheck}
          />
          <label htmlFor="Wii U">Wii U.</label>
        </div>
        <label htmlFor="Genres">
          <strong>Select a Genres</strong>
        </label>
        <select onChange={handleSelect}>
          {genres.map((e, index) => (
            <option key={index} value={e.name}>
              {e.name}
            </option>
          ))}
        </select>

        {input.genres.map((value,index) => (
        <div key={index}>
          <p>
            {value} <button onClick={() => handleDelete(value)}>X</button>
          </p>
        </div>
      ))}

        <div className={style.container_btn}>
          <button className={style.button} id="btn" type="submit">
            Create
          </button>
          <Link to="/home">
            <button className={style.button}>Return</button>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Form;
