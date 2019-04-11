import React from 'react';
import PropTypes from 'prop-types';
import { Form, Text } from 'informed';

// walidator to zwykła funkcja, która przyjmuje aktualną wartość pola
// w przypadku błędu walidacji powinna zwracać treść błędu
// jeśli nie ma błędu powinna zwracać wartość undefined
const validateRequired =
    value => !value || value.length === 0 ? 'Pole jest wymagane' : undefined;

const EventAdd = (props) => {
  const { onFormSubmit, getForm } = props;

  return (
    <Form onSubmit={onFormSubmit} getApi={getForm}>
      {({ formState }) => (
        <>
          <label htmlFor="name">
            Nazwa:
            {/*
              field to nazwa pola - później po tej nazwie będziemy mieć
              dostęne dane w metodzie onSubmit
            */}
            <Text id="name" field="name" validate={validateRequired} />
            {/* aktualne wartości błędów mamy dostępne w obiekcie formState */}
            {formState.errors.name && <span className="error">{formState.errors.name}</span>}
          </label>
          <label htmlFor="place">
            Miejsce:
            <Text id="place" field="place" validate={validateRequired} />
            {formState.errors.place && <span className="error">{formState.errors.place}</span>}
          </label>
          <label htmlFor="date">
            Data:
            <Text id="date" field="date" validate={validateRequired} />
            {formState.errors.date && <span className="error">{formState.errors.date}</span>}
          </label>
          <label htmlFor="time">
            Godzina:
            <Text id="time" field="time" validate={validateRequired} />
            {formState.errors.time && <span className="error">{formState.errors.time}</span>}
          </label>
          <button type="submit">Zapisz</button>
        </>
      )}
    </Form>
  );
};

EventAdd.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  getForm: PropTypes.func.isRequired,
};

export default EventAdd;
