import React, { useState } from "react";
import { FaGamepad, FaCalendarAlt, FaTags, FaStar, FaUser, FaImage, FaInfoCircle, FaLink, FaRocket } from "react-icons/fa";
import "./SubmitGame.css";

function validate(form) {
  const errors = {};
  if (!form.title.trim()) errors.title = "Título é obrigatório";
  if (!form.year || form.year < 1970 || form.year > 2100) errors.year = "Ano deve ser entre 1970 e 2100";
  if (!form.genre.trim()) errors.genre = "Gênero é obrigatório";
  if (!form.rating || form.rating < 0 || form.rating > 10) errors.rating = "Nota deve ser entre 0 e 10";
  if (!form.author.trim()) errors.author = "Desenvolvedor é obrigatório";
  if (form.cover && !/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(form.cover)) errors.cover = "URL da capa deve ser uma imagem válida";
  if (!form.description.trim()) errors.description = "Descrição é obrigatória";
  if (form.link && !/^https?:\/\/.+/i.test(form.link)) errors.link = "Link deve começar com http(s)://";
  return errors;
}

function SubmitGame() {
  const [form, setForm] = useState({
    title: "",
    year: "",
    genre: "",
    rating: "",
    author: "",
    cover: "",
    description: "",
    link: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      // Aqui enviaria para o backend.
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2500);
      setForm({
        title: "",
        year: "",
        genre: "",
        rating: "",
        author: "",
        cover: "",
        description: "",
        link: "",
      });
    }
  }

  return (
    <div className="submit-game-container">
      <h2 className="submit-game-title">Adicionar Novo Jogo Indie</h2>
      {success && <div className="submit-game-success">🎉 Jogo cadastrado com sucesso!</div>}
      <form className="submit-game-form" onSubmit={handleSubmit} noValidate>
        <label>
          <FaGamepad style={{ marginRight: 6 }} /> Título
        </label>
        <input name="title" value={form.title} onChange={handleChange} required />
        {errors.title && <div className="submit-game-error">{errors.title}</div>}

        <label>
          <FaCalendarAlt style={{ marginRight: 6 }} /> Ano
        </label>
        <input name="year" value={form.year} onChange={handleChange} required type="number" min="1970" max="2100" />
        {errors.year && <div className="submit-game-error">{errors.year}</div>}

        <label>
          <FaTags style={{ marginRight: 6 }} /> Gênero
        </label>
        <input name="genre" value={form.genre} onChange={handleChange} required />
        {errors.genre && <div className="submit-game-error">{errors.genre}</div>}

        <label>
          <FaStar style={{ marginRight: 6 }} /> Nota (0 a 10)
        </label>
        <input name="rating" value={form.rating} onChange={handleChange} required type="number" min="0" max="10" step="0.1" />
        {errors.rating && <div className="submit-game-error">{errors.rating}</div>}

        <label>
          <FaUser style={{ marginRight: 6 }} /> Desenvolvedor
        </label>
        <input name="author" value={form.author} onChange={handleChange} required />
        {errors.author && <div className="submit-game-error">{errors.author}</div>}

        <label>
          <FaImage style={{ marginRight: 6 }} /> URL da Capa
        </label>
        <input name="cover" value={form.cover} onChange={handleChange} />
        {errors.cover && <div className="submit-game-error">{errors.cover}</div>}

        <label>
          <FaInfoCircle style={{ marginRight: 6 }} /> Descrição
        </label>
        <textarea name="description" value={form.description} onChange={handleChange} required />
        {errors.description && <div className="submit-game-error">{errors.description}</div>}

        <label>
          <FaLink style={{ marginRight: 6 }} /> Link do Jogo (itch.io, Steam, etc)
        </label>
        <input name="link" value={form.link} onChange={handleChange} />
        {errors.link && <div className="submit-game-error">{errors.link}</div>}

        <button className="submit-game-btn" type="submit">
          <FaRocket style={{ marginRight: 6 }} /> Enviar Jogo
        </button>
      </form>
    </div>
  );
}

export default SubmitGame;